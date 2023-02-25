import React, { useState } from "react";
import { Container, SimpleGrid, Button, Box, Text } from "@chakra-ui/react";
import getPosts from "../../src/lib/services/getPosts";
import { useRouter } from 'next/router';
import Post from "../../src/lib/components/Posts";

export async function getStaticPaths() {
  const posts = await getPosts();
  const types = [...new Set(posts.map(post => post.fields.type))];
  const paths = types.map(type => {
    return {
      params: { type },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
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
  posts.sort((a, b) => {
    const slugA = a.data.slug.toLowerCase();
    const slugB = b.data.slug.toLowerCase();
    if (slugA < slugB) return -1;
    if (slugA > slugB) return 1;
    return 0;
  });

  return {
    props: {
      posts,
    },
  };
}

export default function TypePage({ posts }) {
  const [visible, setVisible] = useState(12);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 12);
  };

  const { query } = useRouter();

  const filteredPosts = posts.filter(post => post.data.type === query.type);
  const firstPost = filteredPosts[0];

  return(
  <Container
  maxWidth
  bgImage={"/images/blob.gif"}
  bgAttachment="fixed"
  bgSize={"cover"}
  bgPosition={"center"}
  backgroundRepeat="no-repeat"
  > 
  

     <Container
       maxWidth="6xl" pb={1}
      >
        <Text fontSize={'5xl'}
        fontWeight = {'bold'}
        textAlign ={'center'}
        >Top Ai Tools for {firstPost ? firstPost.data.type : ''} </Text>
        <Text fontSize={'1xl'}
        textAlign ={'center'}
        >These are the top AI tools for {firstPost ? firstPost.data.type : ''} </Text>
      </Container>
    
      <Container 
   maxWidth="6xl" pb={1}>
      <SimpleGrid 
   columns={[1, 2, 3]} spacing="10" pt={8}
>
   
      {filteredPosts
       
        .map((post, i) => {
          const { data } = post;
          // eslint-disable-next-line react/no-array-index-key
          return( 
            
    
            <Post 
            slug={`${data.slug}`}
            coverImage={data.toolImg}
            Link={data.Link}
            title={data.title}
            excerpt={data.paragraph.split(' ').slice(0, 20).join(' ') + '...'}
            type={data.type}
            type2={data.type2}
              // eslint-disable-next-line react/no-array-index-key
              key={`slug${i}`}
            />
          );
        })} 
  
       
  
             
      </SimpleGrid>
      </Container>
    </Container>
  );
   }

