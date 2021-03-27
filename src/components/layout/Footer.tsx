import { Flex, Link, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Flex as="footer" justifyContent="center" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="#" isExternal>
          polaroisme
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
