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
import SimTools from "../src/lib/components/SimTools";
import {
  getPosts,
  getPostBySlug,
  getAllPosts,
  getPostsByCategory
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
  let simTools = [];
  try {
    const post = await getPostBySlug(`{slug} = "${params.slug}"`);
    data = post[0].fields;
    
    // Fetch posts with the same category
    const categoryPosts = await getPostsByCategory(`{type} = "${data.type}"`);
    simTools = categoryPosts.map(post => post.fields).filter(post => post.slug !== params.slug);
  } catch (err) {
    console.error("error", err);
  }

  return {
    props: {
      data,
      simTools,
    },
  };
}

export default function PostPage({ data, simTools }) {
  
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
              title={data.title}
              urlLink={data.urlLink} />

              <Slugpostright
                emoji={data.emoji}
                title={data.title}
                excerpt={data.paragraph}
                type={data.type}
                pricingModel={data.pricingModel}
              />
            </Stack>
            <SimTools posts={simTools} />
          </Container>
        </Flex>
      </Container >

  
    
      <Footer></Footer>
    </Container>
  );
}
