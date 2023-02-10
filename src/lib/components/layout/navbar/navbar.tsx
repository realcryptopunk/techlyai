import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
// const Links = ["Dashboard", "Projects", "Team"];
import navStyles from "./navbar.module.css";
const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Newsletter",
    path: "/newsletter",
  },
  {
    name: "Job Board",
    path: "/jobsinAi",
  },
];

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Box
    px={3}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    <Link href={path}>{children}</Link>
  </Box>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={navStyles.mobileNav}>
      <Box  px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Techly.Ai</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Link href={"https://tally.so/r/w4a5Ar"}>
            
            <Button
              variant={"solid"}
              bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='Button'
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Submit A Tool
            </Button>
            </Link>
            <ColorModeSwitcher />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </div>
  );
}
