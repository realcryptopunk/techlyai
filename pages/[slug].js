import {
  Button,
  Badge,
  Stack,
  Text,
  Container,
  Image,
  Box,
  Flex,
} from "@chakra-ui/react";
import Slugpostright from "../src/lib/components/Slugpostright";
import Link from "next/link";
import Footer from "../src/lib/components/Footer";
import {
  getPosts,
  getPostBySlug,
  getAllPosts,
} from "../src/lib/services/getPosts";
import Slugpostleft from "../src/lib/components/Slugpostleft";


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
  
  return (
    <Container
    maxWidth="100%"
      py={[8, 16, 24, 32]}
      bgImage={"/images/blob.gif"}
      bgAttachment="fixed"
      bgSize={"cover"}
      bgPosition={"center"}
      backgroundRepeat="no-repeat"
    >
      <Container
        py={"5"}
        sx={{ background: "rgba(243, 179, 244, 0.2)", borderRadius: 20 }}
     
        rounded={"lg"}
        boxShadow="2xl"
      >
        
        <Flex direction="column" flex="1">
          <Container  flex="1">
            <Stack alignItems="center" 
              direction={{ base: "column", lg: "row" }}
              spacing={{ base: '-10', lg: '-10' }}
              flex="1"
            >
            
              <Slugpostleft 
            
              coverImage={data.toolImg} 
              title={data.title} />

              <Slugpostright
                title={data.title}
                excerpt={data.paragraph}
                type={data.type}
                pricingModel={data.pricingModel}
              />
            </Stack>
          </Container>
        </Flex>
      </Container >

  
    
      <Footer></Footer>
    </Container>
  );
}
