import { Button,Badge,Stack,Text,Container,Image,Box,Flex } from "@chakra-ui/react";
import Slugpostright from "../src/lib/components/Slugpostright";
import Slugpostleft from "../src/lib/components/Slugpostleft";
import Link from "next/link";
import { relative } from "path";
import {getPosts, getPostBySlug, getAllPosts} from '../src/lib/services/getPosts';
import Post from '../src/lib/components/Posts';


export async function getStaticPaths() {
  const posts = await getAllPosts();
  const slugs = [];
  posts.forEach((post) => {
    if (post && post.fields && post.fields.slug) {
      slugs.push(post.fields.slug);
    }
  });
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  let data = null;
  try {
    const post = await getPostBySlug(`{slug} = "${params.slug}"`);
    data = post[0].fields;
  } catch (err) {
    console.error("error", err);
  }

  return {
    props: {
      data,
    },
  };
}


export default function PostPage({ data }) {
  // This is where the blog html goes
  return (

    <Container maxWidth py={250}
    bgImage={'/images/blob.gif'} 
    bgAttachment='fixed'
    bgSize={'cover'}
    bgPosition={'center'}
    backgroundRepeat="no-repeat" >

    <Container py={'10'} px={'10'} sx={{bg: (10, 10, 10, 0.7),
      borderRadius: 20,

    }}
      _focus={{ boxShadow: "outline" }}
      rounded={"lg"}
      boxShadow="2xl"
      _hover={{ bg: (0, 0, 0, 2) }}
     >
<Box mt={6}>
    <Button>
      <Link href="/aitools">
        <p>Go Back</p>
      </Link>
    </Button>
  </Box>
    <Flex direction="column" flex="1">
    <Container py="50" px="10" flex="1">
      <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '12', lg: '-20' }} flex="1">
    <Slugpostleft 
         title={data.title}
         excerpt={data.paragraph}
         type={data.type}
         pricing={data.pricing}
    />
    <Slugpostright
     coverImage={data.toolImg}
     title={data.title}
     />
    </Stack>
    </Container>

  </Flex>
  </Container>
  </Container>
  );
}




