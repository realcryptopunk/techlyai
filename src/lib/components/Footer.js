import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => (
  <Box sx={{ background: "rgba(0, 0, 0, 0)", borderRadius: 12 }}>
    <Container as="footer" role="contentinfo">
      <Stack
        spacing="5"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        py={{ base: "12", md: "16" }}
      >
        <Stack spacing={{ base: "6", md: "8" }} align="start">
          <Text color="on-accent-muted">
            Relevant, Fast, Trustworthy news about AI
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column-reverse", md: "column", lg: "row" }}
          spacing={{ base: "12", md: "8" }}
        >
          <Stack direction="row" spacing="8">
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="on-accent-muted">
                Product
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link-on-accent">How it works</Button>
                <Button variant="link-on-accent">Pricing</Button>
                <Button variant="link-on-accent">Use Cases</Button>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="on-accent-muted">
                Legal
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link-on-accent">Privacy</Button>
                <Button variant="link-on-accent">Terms</Button>
                <Button variant="link-on-accent">License</Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing="4"></Stack>
        </Stack>
      </Stack>

      <Divider borderColor="white" />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
      >
        <Text fontSize="sm" color="on-accent-subtle">
          &copy; {new Date().getFullYear()} Techly.ai Inc. All rights reserved.
        </Text>
        <ButtonGroup variant="ghost-on-accent">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
