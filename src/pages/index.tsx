import { Box, Flex } from "@chakra-ui/layout";
import Header from "../components/layout/Header";
import MainForm from "../components/MainForm";
import MainImage from "../components/MainImage";

const Home = () => {
  return (
    <>
      <Header />
      <Flex flexDirection={{ base: "column", md: "row", lg: "row" }}>
        <Box mr={8} pt={1} w="full">
          <MainImage />
        </Box>

        <Box mb={8} w="full">
          <MainForm />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
