import { useColorMode } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import { EmailIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const MainText = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        backgroundColor={colorMode === "light" ? "gray.100" : "gray.500"}
        marginY={8}
        padding={4}
        borderRadius={8}
        boxShadow="lg"
        maxWidth={400}
      >
        <form>
          <FormControl isRequired>
            <FormLabel>Your email address</FormLabel>
            <Input
              backgroundColor={"white"}
              type="email"
              size="md"
              placeholder="yourmail@example.com"
            />
          </FormControl>

          <FormControl marginTop={6} isRequired>
            <FormLabel>Your name</FormLabel>
            <Input
              backgroundColor={"white"}
              type="text"
              placeholder="John Doe"
            />
          </FormControl>

          <Button
            width="full"
            marginTop={4}
            leftIcon={<EmailIcon />}
            colorScheme="blue"
            variant="solid"
            type="submit"
          >
            Send Email
          </Button>
        </form>
      </Box>
    </>
  );
};

export default MainText;
