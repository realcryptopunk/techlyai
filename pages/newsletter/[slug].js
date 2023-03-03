import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import md from "markdown-it";
import Link from 'next/link'
import { Container, Heading, SimpleGrid, Button, Box, Text, Image } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown'
import styled from "@emotion/styled"
import reactMarkdown from 'react-markdown';
import Footer from '../../src/lib/components/Footer';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';


export default function PostPage({
  frontmatter: { title, published_at, cover_image },
  slug,
  content,
}) {
  return (
    <Container maxWidth 
    bgImage={'/images/blob.gif'} 
    bgAttachment="fixed"
    bgSize={'cover'}
    bgPosition={'center'}
    backgroundRepeat="no-repeat"
    >
    
    <Container maxWidth="3xl" pb={1} pt={5}>
    
      <Container>
      <Box pb={1}>
      <Button>
          <Link href="/newsletter">Go Back</Link>
          </Button>
        </Box>
        <Text fontSize="4xl" fontWeight={"bold"}>{title}</Text>
        <Box bg={"gray.800"} p={"1"} px={"2"}>Posted on {published_at}</Box>
        <Image py={"5"} borderRadius='lg' src={cover_image} alt='' />
        <Box>
        <ReactMarkdown components={ChakraUIRenderer()} children={content} skipHtml />
        </Box>
      </Container>
      </Container>
      <Footer></Footer>
    </Container>
  )
}


export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
