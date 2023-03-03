import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Footer from "../../src/lib/components/Footer";
import NewsPosts from "../../src/lib/components/NewsPosts";
import { SimpleGrid, Container, Heading } from "@chakra-ui/react";

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data } = matter(markdownWithMeta);

    return {
      slug,
      data,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function PostPage({ posts }) {
  const filteredPosts = posts.filter((post) => post.slug !== ".DS_Store");
  if (!filteredPosts || filteredPosts.length === 0) {
    return <p>There are no blog posts to display</p>;
  }
  return (
    <Container
      maxWidth
      bgImage={"/images/blob.gif"}
      bgAttachment="fixed"
      bgSize={"cover"}
      bgPosition={"center"}
      backgroundRepeat="no-repeat"
    >
      <Container maxWidth="6xl" pb={16}>
        <Heading // bgGradient='linear(to-l, #7928CA, #FF0080)'
          //  bgClip='text'
          marginTop={5}
          marginBottom={5}
          fontSize="4xl"
          justifyContent={"center"}
          fontWeight="extrabold"
          size="4xl"
        >
          The Latest in AI
        </Heading>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          rowGap={{
            base: "8",
            md: "12",
          }}
          columnGap="8"
        >
          {filteredPosts.map((post, i) => {
            const { data } = post;
            return (
              <NewsPosts
                slug={post.slug}
                coverImage={data.cover_image}
                title={data.title}
                excerpt={data.excerpt}
                author={data.author}
                publishedAt={data.published_at}
                category={data.category}
                // eslint-disable-next-line react/no-array-index-key
                key={`slug${i}`}
              />
            );
          })}
        </SimpleGrid>
      </Container>
      <Footer></Footer>
    </Container>
  );
}
