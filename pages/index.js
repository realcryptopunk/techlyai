import Head from 'next/head';
import marked from 'marked';
import { Container, SimpleGrid } from "@chakra-ui/react";
import getPosts from '../src/lib/services/getPosts';
import Post from '../src/lib/components/Posts';

export async function getStaticProps() {
  let posts;
  try {
    const allPostsFromAirtable = await getPosts();
    posts = allPostsFromAirtable.map((post) => {
      return {
        slug: "test slug",
        data: { ...post.fields },
      };
    });
  } catch (err) {
    console.error("error", err);
  }

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return(
  <Container 
   maxWidth="7xl" pb={1}>
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <pageillustration>
          
        </pageillustration>

      </div>
    
    
      <SimpleGrid 
      
      columns={[1, 2, 3]} spacing="10" pt={8} >
   
      {posts.map((post, i) => {
      const { data } = post;
    // eslint-disable-next-line react/no-array-index-key
        return( 
          <Post 
          slug={`${data.slug}`}
         coverImage={data.toolImg}
         title={data.title}
         excerpt={data.paragraph}
         author={data.type}
         // eslint-disable-next-line react/no-array-index-key
         key={`slug${i}`}
         />
       );
      })} 
             
      </SimpleGrid>
    </Container>
  );
   }
  
