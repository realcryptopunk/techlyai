import {
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    Heading,
    Image,
    Input,
    Stack,
    Text,
  } from '@chakra-ui/react'
  
  export const NewsletterCTA = () => (
    <Box bg="bg-surface">
      <Container
      maxWidth
        py={{
          base: '16',
          md: '24',
        }}
      >
        <Stack
          spacing="16"
          direction={{
            base: 'column',
            md: 'row',
          }}
          align={{
            base: 'start',
            md: 'center',
          }}
        >
          <Stack
            spacing={{
              base: '8',
              md: '10',
            }}
            width="full"
          >
            <Stack
              spacing={{
                base: '4',
                md: '6',
              }}
            >
              <Heading
                size={{
                  base: 'sm',
                  md: 'lg',
                }}
              >
                Subsribe to our newsletter
              </Heading>
              <Text
                fontSize={{
                  base: 'lg',
                  md: 'xl',
                }}
                color="muted"
              >
                We will write you when we have new components released so you can try them first.
              </Text>
            </Stack>
            <Stack
              direction={{
                base: 'column',
                sm: 'row',
              }}
              width="full"
              maxW={{
                md: 'lg',
              }}
              spacing="4"
            >
              <FormControl flex="1">
                <Input type="email" size="lg" placeholder="Enter your email" />
                <FormHelperText color="subtle">Read abotu your privacy policy</FormHelperText>
              </FormControl>
              <Button variant="primary" size="lg">
                Subscribe
              </Button>
            </Stack>
          </Stack>
          <Box
            width="full"
            height={{
              base: 'sm',
              md: 'md',
            }}
          >
            <Image
              boxSize="full"
              alt="Subscribe to newsletter image"
              src="https://tinyurl.com/2p8nmy9p"
              objectFit="cover"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )

  export default NewsletterCTA;