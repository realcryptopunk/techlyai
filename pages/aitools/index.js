import Head from 'next/head';
import marked from 'marked';
import React, { useState } from "react";
import { Input, Container, Heading, SimpleGrid, Button, Box, HStack, Center, Text } from "@chakra-ui/react";
import getPosts from '../../src/lib/services/getPosts';
import Post from '../../src/lib/components/Posts';
import Navbar from '../../src/lib/components/layout/navbar/navbar';
import Heropage from '../../src/lib/components/Heropage';
import { ReactIcon } from '@chakra-ui/icons';
import Categories from '../../src/lib/components/Categories';
import Footer from '../../src/lib/components/Footer';


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
  posts.sort((a, b) => a.data.slug.localeCompare(b.data.slug));

  return {
    props: {
      posts,
    },
  };
}
export default function AITools({ posts }) {
  const [visible, setVisible] = useState(12);
  const [searchQuery, setSearchQuery] = useState('');
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
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container
      maxWidth
      bgImage={'/images/blob.gif'}
      bgAttachment="fixed"
      bgSize={'cover'}
      bgPosition={'center'}
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
          Find Amazing AI Tools That Make Your Life Easy!
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
          {searchResults.length === 0
            ? posts.map((post, i) => {
                const { data } = post;
                if (!data.Categories) {
                  return null;
                }
                return <Categories type={data.catSlug} Categories={data.Categories} />;
              })
            : searchResults.map((post, i) => {
                const { data } = post;
                if (!data.Categories) {
                  return null;
                }
                return <Categories type={data.catSlug} Categories={data.Categories} />;
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
                    excerpt={data.paragraph.split(' ').slice(0, 20).join(' ') + '...'}
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
                    title={data.title}
                    excerpt={data.paragraph.split(' ').slice(0, 20).join(' ') + '...'}
                    type={data.type}
                    type2={data.type2}
                    key={`slug${i}`}
                    />
                    );
                    })}
                    </SimpleGrid>
                    {visible < posts.length && (
                    <Center pt={10}>
                    <Button onClick={showMoreItems}>Load More</Button>
                    </Center>
                    )}
                    </Container>
                    <Footer></Footer>
                    </Container>
                    );
                    }
                   