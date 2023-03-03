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
import { FaParagraph, TbExternalLink } from "react-icons/fa";

const Slugpostright = ({ coverImage, title, excerpt, type, pricingModel }) => {
  return (
    <Container py="5" flex="1">
      <Box>
        <Stack
          spacing={{ base: "2", lg: "2" }}
          justifyContent="space-between"
        >
          <Stack>
            <Box>
              <Box display="flex" alignItems="baseline">
                <Heading
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"5xl"}
                  fontFamily={"body"}
                >
                  {title}
                </Heading>
              </Box>

              <Text mt={1} mb={1}>
                {excerpt}
              </Text>
            </Box>
            <HStack>
              <Text>Catgory:</Text>
            <Link href={`/categories/${type}`}>
              <Box display="flex" alignItems="baseline">
                {type && (
                  <Badge
                    borderRadius="full"
                    px="2"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    mr={1}
                  >
                    {type}
                  </Badge>
                )}
              </Box>
            </Link>
            </HStack>
            <HStack>
              <Text>Pricing:</Text>
              <Box display="flex" alignItems="baseline">
                  <Badge
                    borderRadius="full"
                    px="2"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    mr={1}
                  >
                    {pricingModel}
                  </Badge>
                
              </Box>
            </HStack>
          </Stack>
          <Stack
            mt={5}
            direction={"row"}
            spacing={4}
            align={"center"}
            width="100%"
            pb="3"
          >
          
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Slugpostright;
