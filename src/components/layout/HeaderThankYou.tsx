import { Box, Flex, Heading } from "@chakra-ui/layout";

import ThemeToggle from "./ThemeToggle";

const HeaderThankYou = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading
        fontSize={{ base: "24px", md: "36px", lg: "48px" }}
        fontFamily="Baskerville"
      >
        Terima Kasih Atas Partisipasi Anda
      </Heading>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default HeaderThankYou;
