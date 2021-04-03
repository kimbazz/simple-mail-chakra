import { Center } from "@chakra-ui/layout";
import HeaderThankYou from "../components/layout/HeaderThankYou";
import MainText from "../components/ThankYouSections/MainText";

const ThankYou = () => {
  return (
    <>
      <Center>
        <HeaderThankYou />
      </Center>
      <Center>
        <MainText />
      </Center>
    </>
  );
};

export default ThankYou;
