import Head from "next/head";
import marked from "marked";
import React, { useState } from "react";
import {
  Input,
  Container,
  Heading,
  SimpleGrid,
  Button,
  Box,
  HStack,
  Center,
  Text,
} from "@chakra-ui/react";
import getPosts from "../../src/lib/services/getPosts";
import Post from "../../src/lib/components/Posts";
import Navbar from "../../src/lib/components/layout/navbar/navbar";
import Heropage from "../../src/lib/components/Heropage";
import { ReactIcon } from "@chakra-ui/icons";
import Footer from "../../src/lib/components/Footer";
import Link from "next/link";

export async function getStaticProps() {
  let posts;
  try {
    const allPostsFromAirtable = await getPosts();
    console.log("Airtable", allPostsFromAirtable);
    posts = allPostsFromAirtable.map((post) => {
      return {
        slug: "test slug",
        data: { ...post.fields },
      };
    });
  } catch (err) {
    console.error("error", err);
  }

  // sort the posts alphabetically by the value of data.slug

  return {
    props: {
      posts,
    },
  };
}
const Categories = ({ type, Categories, posts, setSearchResults }) => {
  const handleCategoryClick = () => {
    const filteredPosts = posts.filter((post) => post.data.type.includes(type));
    setSearchResults(filteredPosts);
  };

  return (
    <HStack p="1">
      <Box display={"flex"} alignItems={"baseline"}></Box>
      <Box display="flex" alignItems="baseline">
        <Button size="md" mr={4} onClick={handleCategoryClick}>
          {Categories}
        </Button>
      </Box>
    </HStack>
  );
};

export default function AITools({ posts }) {
  const [visible, setVisible] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 12);
  };

  const handleSearch = () => {
    const filteredPosts = posts.filter((post) =>
      post.data.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredPosts);
  };

  const handleResetSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const filterPosts = (category) => {
    const filteredPosts = posts.filter((post) =>
      post.data.Categories.includes(category)
    );
    setSearchResults(filteredPosts);
  };

  return (
    <Container
      maxWidth
      bgImage={"/images/blob.gif"}
      bgAttachment="fixed"
      bgSize={"cover"}
      bgPosition={"center"}
      backgroundRepeat="no-repeat"
    >
      <Container maxWidth="6xl" pb={1}>
        <Center
          marginTop={5}
          marginBottom={5}
          fontSize="4xl"
          fontWeight="extrabold"
          size="4xl"
        >
          Find an awesome AI tool that makes your life easier!
        </Center>
        <Box pb={5}>
          <HStack>
            <Input
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              onKeyPress={handleKeyPress}
              placeholder="Search for a tool"
            />
            <Button onClick={handleSearch}>Search</Button>
            {searchResults.length > 0 && (
              <Button onClick={handleResetSearch}>Reset Search</Button>
            )}
          </HStack>
        </Box>

        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacingX="0px" spacingY="0px">
          {posts.map((post, i) => {
            const { data } = post;
            if (!data.Categories) {
              return null;
            }
            return (
              <Categories
                type={data.catSlug}
                Categories={data.Categories}
                posts={posts}
                setSearchResults={setSearchResults}
              />
            );
          })}
        </SimpleGrid>
      </Container>
      <Container maxWidth="6xl" pb={1}>
        <SimpleGrid columns={[1, 2, 3]} spacing="10" pt={8}>
          {searchResults.length === 0
            ? posts.slice(0, visible).map((post, i) => {
                const { data } = post;
                return (
                  <Post
                    slug={`${data.slug}`}
                    coverImage={data.toolImg}
                    Link={data.Link}
                    title={data.title}
                    emoji={data.emoji}
                    excerpt={
                      data.paragraph.split(" ").slice(0, 20).join(" ") + "..."
                    }
                    type={data.type}
                    type2={data.type2}
                    key={`slug${i}`}
                  />
                );
              })
            : searchResults.map((post, i) => {
                const { data } = post;
                return (
                  <Post
                    slug={`${data.slug}`}
                    coverImage={data.toolImg}
                    Link={data.Link}
                    emoji={data.emoji}
                    title={data.title}
                    excerpt={
                      data.paragraph.split(" ").slice(0, 20).join(" ") + "..."
                    }
                    type={data.type}
                    type2={data.type2}
                    key={`slug${i}`}
                  />
                );
              })}
        </SimpleGrid>
        {visible <
          (searchResults.length === 0
            ? posts.length
            : searchResults.length) && (
          <Center pt={10}>
            <Button onClick={showMoreItems}>Load More</Button>
          </Center>
        )}
      </Container>
      <Footer></Footer>
    </Container>
  );
}
