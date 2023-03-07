import {
  Text,
  Box,
  Stack,
  VStack,
  HStack,
  Card,
  Button,
  Badge,
  Heading,
  Avatar,
} from "@chakra-ui/react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useColorModeValue } from "@chakra-ui/react";
import { blogDashboard } from "../../../styles/customTheme";
import { TbExternalLink } from "react-icons/fa";

const Posts = ({ slug, coverImage, title, excerpt, type, type2 }) => {
  const lines = excerpt.split("\n");
  const limitedExcerpt =
    lines.slice(0, 3).join("\n") + (lines.length > 3 ? "\n..." : "");

  return (
    <Link href={`${slug}`}
           _hover={{
              textDecor: "none",
            }}
            role="group">
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
      >
        <Image src={coverImage} alt={title} width={390} height={217} />
        <Stack
          p="3"
          spacing={{ base: "4", lg: "4" }}
          justifyContent="space-between"
          flex="2"
        >
          <Stack>
            <Link href={`/categories/${type}`}>
              <Box display="flex" alignItems="baseline">
                {type && (
                  <Button
                  size={"sm"}
                    borderRadius="full"
                    px="2"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    mr={1}
                  >
                    {type}
                  </Button>
                )}
              </Box>
            </Link>

            <Box>
              <Box display="flex" alignItems="baseline">
                <Text
                  color={useColorModeValue("white", "white")}
                  fontSize={"xl"}
                  fontWeight={"bold"}
                  fontFamily={"heading"}
                >
                  {title}
                </Text>
              </Box>
              <Text mt={1}>{limitedExcerpt}</Text>
            </Box>
          </Stack>
          <Stack mt={6} spacing={4} align={"center"} width="100%" pb="3">
            <Box>
              <Button  sx={{ background: "rgba(0, 0, 0, 0.3)"}}  fontWeight="medium">
                Learn More
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
};

export default Posts;

// {type2 && type2 !== '' && (
// <Badge borderRadius="full" px="2" colorScheme="teal">
//{type2}
//</Badge>
//)
