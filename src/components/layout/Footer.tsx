import { Flex, Text, Stack } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Flex as="footer" justifyContent="center" width="full">
      <Text fontSize={{ base: "xx-small", md: "x-small", lg: "x-small" }}>
        {new Date().getFullYear()} - COPYRIGHT &copy; KIMIA FARMA | POWERED BY
        POLAROISME
      </Text>
    </Flex>
  );
};

export default Footer;
