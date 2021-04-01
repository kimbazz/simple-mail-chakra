import { Box, Flex, Heading } from "@chakra-ui/layout";

import AccessibleLink from "../AccessibleLink";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <AccessibleLink href="/">
        <Heading fontSize="50px" fontFamily="Baskerville">Dapatkan Sertifikat Kimia Farma Sehat Dengan Berbagi Berkah</Heading>
      </AccessibleLink>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
