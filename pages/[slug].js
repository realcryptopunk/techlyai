import { Button,Badge,Stack,Text,Container,Image,Box } from "@chakra-ui/react";

import Link from "next/link";
import { relative } from "path";
import {getPosts, getPostBySlug, getAllPosts} from '../src/lib/services/getPosts';
import Post from '../src/lib/components/Posts';



export async function getStaticPaths() {
    const posts = await getAllPosts();
    const slugs = [];
    posts.forEach(post => {
      if (post && post.fields && post.fields.slug) {
        slugs.push(post.fields.slug);
      }
    });
    const paths = slugs.map(slug => ({ params: { slug } }));
    return {
      paths,
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
      <Container  maxW="960px" mx="auto"
     
        rounded={'md'}
        p={6}
      >
        <Stack>
      <Box
      mt={6}>
        <Button>
        <Link href="/">
          <p>Go Back</p>
        </Link>
        </Button>
       
      </Box>


       
        <Box
          h={'210px'}
          mt={6}
          mb={10}
          pos ={'relative'}
        >
          <Image
            src=
              {data.toolImg}
            alt={data.title}
            borderRadius = {10}
            layout={'fill'}
          /> 
         <Badge
         mt={3}
         mb={-3} 
         borderRadius='full' px='2' colorScheme='teal'>
                {data.type}
              </Badge>
          <Stack>
         
          <Text 
          fontSize='5xl' 
          fontWeight='bold'>
            {data.title}
          </Text>
    
      <Text>
        {data.paragraph}
      </Text>
      </Stack>
        </Box>
        </Stack>

      </Container>
    );
  }