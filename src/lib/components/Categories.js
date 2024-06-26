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
  Container,
} from "@chakra-ui/react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useColorModeValue } from "@chakra-ui/react";
import { blogDashboard } from "../../../styles/customTheme";
import { TbExternalLink } from "react-icons/fa";

const Categories = ({ type, Categories }) => {
  return (
    <HStack p="1">
      <Box display={"flex"} alignItems={"baseline"}></Box>
      <Link href={`/categories/${type}`}>
        <Box display="flex" alignItems="baseline">
          <Button size="md" sx={{ background: "rgba(78, 78, 78, 0.2)"}} mr={4}>
            {Categories}
          </Button>
        </Box>
      </Link>
    </HStack>
  );
};

export default Categories;
