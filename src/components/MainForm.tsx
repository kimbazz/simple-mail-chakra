import axios from "axios";
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
import { useRouter } from "next/router";

const axiosInstance = axios.create();

const MainForm = () => {
  const router = useRouter();
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
      // Use Axios to post data
      // Get the response
      // Redirect it to thank you page
      const result = await axiosInstance.post(
        "https://polaroisme.xyz/v1/mail",
        {
          email,
          name,
          workLocation,
        }
      );
      if (result.status === 200) {
        setIsLoading(false);
        setIsButtonDisabled(false);
        setEmail("");
        setName("");
        setWorkLocation("");
        router.push("/thankyou");
      }
    } catch (error) {
      setEmail("");
      setName("");
      setWorkLocation("");
      setIsLoading(false);
      setIsButtonDisabled(false);
    } finally {
      setIsLoading(false);
      setIsButtonDisabled(false);
      setEmail("");
      setName("");
      setWorkLocation("");
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
            <FormLabel>Masukkan Email</FormLabel>
            <Input
              backgroundColor={colorMode === "light" ? "white" : "gray.500"}
              type="email"
              size="md"
              placeholder="emailanda@kimiafarma.co.id"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
          </FormControl>

          <FormControl marginTop={6} isRequired>
            <FormLabel>Nama</FormLabel>
            <Input
              backgroundColor={colorMode === "light" ? "white" : "gray.500"}
              type="text"
              placeholder="Syaiful Anwar"
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
              <option value="tradedistribution">
                Kimia Farma Trade Distribution
              </option>
              <option value="apotek">Kimia Farma Apotek</option>
              <option value="plant">Kimia Farma Plant</option>
              <option value="diagnostika">Kimia Farma Diagnostika</option>
              <option value="headoffice">Kimia Farma Head Office</option>
              <option value="warehouse">Kimia Farma Warehouse</option>
              <option value="laboratorium">Kimia Farma Laboratorium</option>
            </Select>
          </FormControl>

          <Button
            width="full"
            marginTop={4}
            colorScheme="green"
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

export default MainForm;
