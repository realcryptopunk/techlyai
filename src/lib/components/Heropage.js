import { Box, Button, Flex, Heading, HStack, Img, Stack, Text } from '@chakra-ui/react'
import { HiChevronRight } from 'react-icons/hi'


export const Heropage = () => {
  return (
    <Box bg="gray.800" as="section" minH="140px" position="relative">
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
            <Heading as="h1" size="3xl" fontWeight="extrabold">
            Don't lose your job to AI!
            </Heading>
            <Text
              fontSize={{
                md: '2xl',
              }}
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
                colorScheme="blue"
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
                px="5"
                py="3"
                _hover={{
                  bg: 'whiteAlpha.300',
                }}
              >
                <span>Free list of 500 ChatGPT prompts </span>
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
            src="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Flex>
    </Box>
  )
}
export default Heropage;