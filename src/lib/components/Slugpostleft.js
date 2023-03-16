import {
  Text,
  Box,
  Stack,
  VStack,
  HStack,
  Card,
  Button,
  Flex,
  Container,
  Badge,
  Heading,
  Avatar,
} from "@chakra-ui/react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useColorModeValue } from "@chakra-ui/react";
import { blogDashboard } from "../../../styles/customTheme";
import { FiExternalLink } from "react-icons/fi";

const Slugpostleft = ({ coverImage, title, excerpt, type, pricing, urlLink }) => {
  console.log('urlLink:', urlLink); // Add this line to log the value of urlLink

  return (
    <Container py="5" flex="1">
      <Box>
        <Stack
          spacing={{ base: "2", lg: "2" }}
          justifyContent="space-between"
        >
            <Box mb={5}>
          <Button>
            <Link href="/aitools">
              <p>Go Back</p>
            </Link>
          </Button>
        </Box>
        <a href={`${urlLink}`} target="_blank" rel="noopener noreferrer">
  <Box position="relative">
    <Image src={coverImage} alt={title} width={600} height={295} />
    <Box
      position="absolute"
      top={0}
      right={0}
      bottom={0}
      left={0}
      backgroundColor="rgba(128, 128, 128, 0.4)"
      opacity={0}
      _hover={{ opacity: 1 }}
      transition="opacity 0.3s ease"
    />
  </Box>
</a>

            
        </Stack>
      </Box>
    </Container>
  );
};

export default Slugpostleft;
