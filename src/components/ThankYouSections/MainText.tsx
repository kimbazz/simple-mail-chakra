import { Box, Flex, Center } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
const MainForm = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex width={1200} height={400}>
        <Box mb={8} w="full">
          <Box
            backgroundColor={colorMode === "light" ? "gray.100" : "gray.500"}
            marginY={8}
            padding={4}
            borderRadius={8}
            boxShadow="lg"
            maxWidth={{ base: "400", md: "800", lg: "800" }}
            height={{ base: "250", md: "300", lg: "300" }}
          >
            <Center
              fontFamily="Baskerville"
              fontSize={{ base: "2xl", md: "xxx-large", lg: "xxx-large" }}
              fontWeight="bold"
              marginTop={75}
            >
              Marhaban Yaa Ramadhan <br />
            </Center>
            <Center fontSize={{ base: "small", md: "medium", lg: "medium" }}>
              Silahkan cek email anda untuk mendapatkan link download sertifikat
            </Center>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default MainForm;
