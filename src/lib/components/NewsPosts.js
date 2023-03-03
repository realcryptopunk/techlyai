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

const NewsPosts = ({
  slug,
  coverImage,
  title,
  excerpt,
  author,
  author_image,
  publishedAt,
  category,
}) => {
  const lines = excerpt.split("\n");
  const limitedExcerpt =
    lines.slice(0, 3).join("\n") + (lines.length > 3 ? "\n..." : "");
  return (
    <Link href={`newsletter/${slug}`}
    _hover={{
      textDecor: "none",
    }}
    role="group">
            <Box
              p="6"
              sx={{ background: "rgba(243, 179, 244, 0.2)", borderRadius: 12 }}
              boxShadow="md"
              _groupHover={{
                boxShadow: "xl",
              }}
              transition="all 0.2s"
              height="full"
            >
              <Stack
                spacing={{
                  base: "8",
                  lg: "16",
                }}
                justify="space-between"
                height="full"
              >
                <Stack spacing="8">
                  <Box overflow="hidden">
                    <Image
                      src={coverImage}
                      alt={title}
                      width={390} height={217}
                      objectFit="cover"
                    />
                  </Box>
                  <Stack spacing="3">
                    <Heading size="xs">{title}</Heading>
                    <Text color="muted">{limitedExcerpt}</Text>
                  </Stack>
                </Stack>
                <HStack>
                  <Avatar src={author_image} boxSize="10" />
                  <Box fontSize="sm">
                    <Text fontWeight="medium">{author}</Text>
                    <Text color="muted">{publishedAt}</Text>
                  </Box>
                </HStack>
              </Stack>
            </Box>
        
    </Link>
  );
};

export default NewsPosts;
