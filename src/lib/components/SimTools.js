import React from "react";
import { Box, Heading, Text, HStack, Image } from "@chakra-ui/react";
import Link from "next/link";

const Simtools = ({ posts }) => {
  return (
    <Box>
      <Heading fontWeight="bold" fontSize="xl">
        Similar AI Tools
      </Heading>
      <HStack spacing={4} alignItems="start">
        {posts.map((post) => {
          const maxLength = 100;
          const limitedExcerpt =
            post.paragraph.length > maxLength
              ? post.paragraph.slice(0, maxLength) + "..."
              : post.paragraph;
          return (
            <Box
              sx={{ background: "rgba(243, 179, 244, 0.2)", borderRadius: 12 }}
              boxShadow="md"
              _groupHover={{
                boxShadow: "xl",
              }}
              transition="all 0.2s"
              height="full"
              display="flex"
              flexDirection="column"
              key={post.slug}
            >
              
              <Link href={`/${post.slug}`} passHref>
                
                <Image
                  borderRadius={"xl"}
                  src={post.toolImg}
                  alt={post.title}
                  width={217}
                  height={217}
                />
              </Link>
              <Text as="a" fontWeight="bold" fontSize="lg">
                  {post.emoji}
                  {post.title}
                </Text>
              <Text>{limitedExcerpt}</Text>
            </Box>
          );
        })}
      </HStack>
    </Box>
  );
};

export default Simtools;
