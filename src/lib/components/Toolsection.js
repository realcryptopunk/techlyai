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

const Toolsection = ({ slug, coverImage, title, excerpt, type, type2 }) => {
    return (
    <Box
          h={'210px'}
          mt={6}
          mb={10}
          pos ={'relative'}
        >
          <Image
            src=
              {data.toolImg}
            alt={data.title}
            borderRadius = {10}
            layout={'fill'}
          /> 
          </Box>

    )}

    export default Toolsection; 