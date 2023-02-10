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
import {TbExternalLink} from "react-icons/fa"

const Post = ({ slug, coverImage, title, excerpt, type, type2 }) => {
  const lines = excerpt.split("\n");
  const limitedExcerpt = lines.slice(0, 3).join("\n") + (lines.length > 3 ? "\n..." : "");

  return (
    <Link href={`/${slug}`}>
      <Box
        bg={useColorModeValue("gray.200", "gray.700")}
        _focus={{ boxShadow: "outline" }}
        rounded={"lg"}
        boxShadow="2xl"
        _hover={{ bg: useColorModeValue("blue.100", "blue.400") }}
        height="full"
        display="flex"
        flexDirection="column"
      >
        <Image
          src={coverImage}
          alt={title}
          width={390}
          height={217}
        />
        <Stack
          p="3"
          spacing={{ base: "4", lg: "8" }}
          justifyContent="space-between"
          flex="1"
          minHeight="200px"
        >
          <Stack>
            <Link href={`/categories/${type}`}>
            <Box display="flex" alignItems="baseline">
              {type && (
                <Badge borderRadius="full" px="2" colorScheme="teal" mr={1}>
                  {type}
                </Badge>
              )
             }
              </Box>
              </Link>
            
            <Box>
            <Box display="flex" alignItems="baseline">
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"xl"}
                fontFamily={"body"}
              >
                {title}
              </Heading >
        
              
            </Box>
              <Text mt={2}>{limitedExcerpt}</Text>
            </Box>
          </Stack>
          <Stack
            mt={6}
            direction={"row"}
            spacing={4}
            align={"center"}
            width="100%"
            pb="3"
          >
            <Box>
              <Button fontWeight="medium">Learn More</Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
};

export default Post;


// {type2 && type2 !== '' && (
 // <Badge borderRadius="full" px="2" colorScheme="teal">
  //{type2}
//</Badge>
//)