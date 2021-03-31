import { Flex, Link, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Flex as="footer" justifyContent="center" width="full" align="center">
      <Text as="sup">
        {new Date().getFullYear()} -{" "}
        <Link href="#" isExternal>
          COPYRIGHT &copy; KIMIA FARMA | POWERED BY POLAROISME
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
