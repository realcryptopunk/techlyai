import { Button,Text,Container,Image,Box } from "@chakra-ui/react";

import Link from "next/link";
import {getPosts, getPostBySlug, getAllPosts} from '../src/lib/services/getPosts';



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
      <Container  maxW="960px" mx="auto">
      
      <div>
        <Button>
        <Link href="/">
          <p>Go Back</p>
        </Link>
        </Button>
       
      </div>

  
      <div >
        <Box>
        <Text fontSize='5xl' fontWeight='bold'>{data.title}</Text>
             
        <Image
          src={data.toolImg}
          width={855}
          height={500}
          alt=""
        />
        
      <p>
        {data.paragraph}
      </p>
        </Box>
       
  
          
    </div>
      </Container>
    );
  }