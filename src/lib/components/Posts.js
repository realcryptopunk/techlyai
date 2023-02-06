import { Text,
    Box,
    Stack,
    VStack,
    HStack,
    Card,
    Button,
    Badge,
    Heading,
    Avatar,} from "@chakra-ui/react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useColorModeValue } from "@chakra-ui/react";
import { blogDashboard } from "../../../styles/customTheme";


const Post = ({ slug, coverImage, title, excerpt, author, publishedAt, category }) => (
    
  <Link href={`/${slug}`}>
  
    <Box
     
     bg = {useColorModeValue("gray.200", "gray.700")}
     _focus={{ boxShadow: "outline" }}
      rounded={"lg"}
      boxShadow="2xl" 
      _hover={{bg: useColorModeValue("blue.10", "blue.700")}}
      height="full"
    
    >
    <Image
              
              src={coverImage}
              alt={title}
              width={390}
              height={217}
            />
  
       
    <Stack
    p = "3"
    spacing={{ base: "4", lg: "8" }}
    justifyContent="space-between"
    
    >
        <Stack >
             <Box display='flex' alignItems='baseline'>
               <Badge borderRadius='full' px='2' colorScheme='teal'>
                {author}
              </Badge>
            </Box>
            <Box>
            <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {title}
          </Heading>
                <Text>{excerpt}</Text>
            </Box>
      </Stack>
         <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
             <Box>
              <Button fontWeight="medium">Learn More</Button>
             </Box>
         </Stack>
      </Stack>
    </Box>
  </Link>
);

export default Post;
