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

const Slugpostleft = ({ coverImage, title, excerpt, type, pricing }) => {
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

            <Image
            src={coverImage} 
            alt={title} 
            width={320} 
            height={280} />
          <Stack
            direction={"row"}
            spacing={4}
            align={"center"}
          >
            <Box mt={"3"} >
              <Button
                borderRadius={"md"}
                width={"l"}
                justifyContent="center"
                fontWeight="bold"
              >
                Visit {title}&nbsp;
                <FiExternalLink size={"20"}></FiExternalLink>{" "}
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Slugpostleft;
