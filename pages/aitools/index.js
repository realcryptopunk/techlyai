import Head from 'next/head';
import marked from 'marked';
import React, { useState } from "react";
import { Container, Heading, SimpleGrid, Button, Box } from "@chakra-ui/react";
import getPosts from '../../src/lib/services/getPosts';
import Post from '../../src/lib/components/Posts';
import Navbar from '../../src/lib/components/layout/navbar/navbar';
import Sphere from '../../src/lib/components/Sphere';
import Heropage from '../../src/lib/components/Heropage';
import { ReactIcon } from '@chakra-ui/icons';
import Categories from '../../src/lib/components/Categories';

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


export default function AITools({ posts }) {
  const [visible, setVisible] = useState(12);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 12);
  };

  return(
    <Container maxWidth 
    bgImage={'/images/blob.gif'} 
    bgAttachment="fixed"
    bgSize={'cover'}
    bgPosition={'center'}
    backgroundRepeat="no-repeat"
    >
    
     
      
      <Container maxWidth="6xl" pb={1}>
      <Heading   // bgGradient='linear(to-l, #7928CA, #FF0080)'
                   //  bgClip='text'
                   marginTop={5}
                   marginBottom={5}
                    fontSize='4xl'
                    justifyContent={'center'}
                    fontWeight='extrabold'
                     size="4xl" >
               Find Amazing AI Tools That Make Your Life Easy!
            </Heading>
     
      <SimpleGrid 
  columns={[5]}
  spacingX="0px"
  spacingY="0px"
>
  {posts?.map((post, i) => {
    const { data } = post;
    if (!data.Categories) {
      return null;
    }
    return (
      
      <Categories
        type={data.catSlug}
        Categories={data.Categories}
      />
    );
  })}
  
</SimpleGrid>
</Container>
  <Container 
   maxWidth="6xl" pb={1}>
     
      <SimpleGrid 
      
      columns={[1, 2, 3]} spacing="10" pt={8} >
   
      {posts?.slice(0,visible).map((post, i) => {
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
      <Box mt="10" mb="10" align="center" justify="center">
        <Button 
      onClick={showMoreItems} >
          Load More
     </Button>
        </Box>
    </Container>
    </Container>
  );
}