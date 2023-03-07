import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  Input,
  Center,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import Blogpage from "./Blogpage";
import Footer from "./Footer";

export const Heropage = () => {
  return (
    
    <Box as="section" position="relative">
      <Box py="32" position="relative" zIndex={1}>
        <Box
          maxW={{
            base: "xl",
            md: "6xl",
          }}
          mx="auto"
          
          px={{
            base: "6",
            md: "8",
          }}
        >
         
          <Box >
            <Heading 
              // bgGradient='linear(to-l, #7928CA, #FF0080)'
              //  bgClip='text'
              fontSize="6xl"
              fontWeight="extrabold"
              size="4xl"
            >
              Don't lose your job to AI! 💼
            </Heading>
          
            <Text
              fontSize={{
                md: "2xl",
              }}
              bg={useColorModeValue("white", "white")}
              bgClip="text"
              mt="4"
              maxW="lg"
            >
              AI is changing the world, and we're here to help you stay ahead of
              the curve. Join us to get your daily dose of AI. We'll provide you
              with a juicy 3-minute newsletter on everything AI. (Promise you
              it's not boring!)
            </Text>
               
                  
            <Stack
              spacing="4"
              direction={{
                base: "column",
                md: "row",
              }}
              width="full"
              py={5}
            >
              <Input
                size="lg"
                type="email"
                placeholder="Enter your email"
                maxW={{
                  md: "sm",
                }}
              />
              <Button
                variant="ghost"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="Button"
                size="lg"
              >
                Subscribe
              </Button>
            
            </Stack>
            
         
          </Box>
        
          <Blogpage></Blogpage>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full"></Box>
      </Flex>
      <Footer></Footer>
    </Box>
  );
};
export default Heropage;
