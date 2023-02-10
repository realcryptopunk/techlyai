import { Box, Button, Flex, Heading, HStack, Img, Stack, Text } from '@chakra-ui/react'
import { HiChevronRight } from 'react-icons/hi'
import { useColorModeValue } from '@chakra-ui/react'



export const Heropage = () => {
  return (
    <Box as="section"  position="relative">
      <Box py="32" position="relative" zIndex={1}>
        <Box
          maxW={{
            base: 'xl',
            md: '7xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
          color="white"
        >
          <Box maxW="xl">
            <Heading    bgGradient='linear(to-l, #7928CA, #FF0080)'
                     bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold'
                     size="4xl" >
            Don't lose your job to AI!
            </Heading>
            
            <Text
              fontSize={{
                md: '2xl',
              }}
              bg={useColorModeValue("black", "white")}
              bgClip = 'text'
              mt="4"
              maxW="lg"
            >
              
              AI is changing the world, and we're here to help you stay ahead of the curve. Join us to get your daily dose of AI. We'll provide you with a juicy 3-minute newsletter on everything AI. 

(Promise you it's not boring)

            </Text>
            
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              mt="10"
              spacing="4"
            >
              <Button
                as="a"
                href="#"
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='Button'
                px="8"
                rounded="full"
                
                size="lg"
                fontSize="md"
                fontWeight="bold"
              >
                Get Smarter about AI
              </Button>
              <HStack
                as="a"
                transition="background 0.2s"
                justify={{
                  base: 'center',
                  md: 'flex-start',
                }}
                href="#"
                color="white"
                rounded="full"
                fontWeight="bold"
                px="1"
                
                _hover={{
                  bg: 'whiteAlpha.300',
                }}
              >
                <span
                >Free list of 500 ChatGPT prompts </span>
                <HiChevronRight />
              </HStack>
            </Stack>
          </Box>
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
        <Box position="relative" w="full" h="full">
          <Img
            src="/images/blurimg.png"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full"  />
        </Box>
      </Flex>
    </Box>
  )
}
export default Heropage;
