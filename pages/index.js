import Head from 'next/head';
import marked from 'marked';
import React, { useState } from "react";
import { Container, Header, SimpleGrid, Button, Box } from "@chakra-ui/react";
import getPosts from '../src/lib/services/getPosts';
import Post from '../src/lib/components/Posts';
import Navbar from '../src/lib/components/layout/navbar/navbar';
import Heropage from '../src/lib/components/Heropage';
import { ReactIcon } from '@chakra-ui/icons';
import Categories from '../src/lib/components/Categories'
import NewsletterCTA from '../src/lib/components/NewsletterCTA'

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


export default function Home({ posts }) {
 
  

  return(
    <Container maxWidth 
    alignItems='center'
    bgImage={'/images/blob.gif'} 
    bgAttachment='scroll'
    bgSize={'cover'}
    bgPosition={'center'}
    backgroundRepeat="no-repeat">
      <Heropage></Heropage>
      
      
    </Container>
  
   
  );}