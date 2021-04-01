import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Flex, Center } from "@chakra-ui/layout";
import HeaderThankYou from "../components/layout/HeaderThankYou";

const ThankYou = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Center>
        <HeaderThankYou />
      </Center>
      <Center>
        <Flex width={1200} height={400}>
          <Box mb={8} w="full">
            <Box
              backgroundColor={colorMode === "light" ? "gray.100" : "gray.500"}
              marginY={8}
              padding={4}
              borderRadius={8}
              boxShadow="lg"
              maxWidth={800}
              height={300}
            >
              <Center
                fontFamily="Baskerville"
                fontSize="xxx-large"
                fontWeight="bold"
                marginTop={75}
              >
                Marhaban Yaa Ramadhan <br />
              </Center>
              <Center>
                Silahkan cek email anda untuk mendapatkan link download
                sertifikat
              </Center>
            </Box>
          </Box>
        </Flex>
      </Center>
    </>
  );
};

export default ThankYou;
