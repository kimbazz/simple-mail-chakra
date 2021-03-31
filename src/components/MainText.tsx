import { useColorMode } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  CircularProgress,
} from "@chakra-ui/react";
import { useState } from "react";

const MainText = () => {
  const { colorMode } = useColorMode();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsButtonDisabled(true);
    setIsLoading(true);
    try {
      setTimeout(function () {
        console.log("email => ", email);
        console.log("name => ", name);
        console.log("workLocation => ", workLocation);

        // Use Axios to post data
        // Get the response
        // Redirect it to thank you page

        setIsLoading(false);
        setIsButtonDisabled(false);
        setEmail("");
        setName("");
        setWorkLocation("");
      }, 3000);
    } catch (error) {
      setEmail("");
      setName("");
      setWorkLocation("");
      setIsLoading(false);
      setIsButtonDisabled(false);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              backgroundColor={colorMode === "light" ? "white" : "gray.500"}
              type="email"
              size="md"
              placeholder="yourmail@example.com"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
          </FormControl>

          <FormControl marginTop={6} isRequired>
            <FormLabel>Nama</FormLabel>
            <Input
              backgroundColor={colorMode === "light" ? "white" : "gray.500"}
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(event) => setName(event.currentTarget.value)}
            />
          </FormControl>

          <FormControl marginTop={6} isRequired>
            <FormLabel>Lokasi kerja</FormLabel>
            <Select
              variant="outline"
              placeholder="-- Silahkan Pilih --"
              bg={colorMode === "light" ? "white" : "gray.500"}
              value={workLocation}
              onChange={(event) => setWorkLocation(event.currentTarget.value)}
            >
              <option value="headoffice">Kimia Farma Head Office</option>
              <option value="warehouse">Kimia Farma Warehouse</option>
              <option value="laboratorium">Kimia Farma Laboratorium</option>
            </Select>
          </FormControl>

          <Button
            width="full"
            marginTop={4}
            colorScheme="blue"
            variant="solid"
            type="submit"
            disabled={isButtonDisabled}
          >
            {isLoading ? (
              <CircularProgress isIndeterminate size="24px" color="teal" />
            ) : (
              "Send Email"
            )}
          </Button>
        </form>
      </Box>
    </>
  );
};

export default MainText;
