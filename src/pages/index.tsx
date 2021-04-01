import { Box, Flex } from "@chakra-ui/layout";
import Header from "../components/layout/Header";
import MainText from "../components/MainText";
import MainImage from "../components/MainImage";

const Home = () => {
  return (
    <>
      <Header />
      <Flex>
        <Box mr={8} pt={1} w="full">
          <MainImage />
        </Box>
        <Box mb={8} w="full">
          <MainText />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
