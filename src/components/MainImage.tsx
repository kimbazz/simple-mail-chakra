import { Box, Text } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";

const MainImage = () => {
  return (
    <>
      <Box marginY={8} maxWidth={400} marginX="auto" borderRadius={8}>
        <Image
          src="/kimia-farma-landing-page-logo.png"
          width={500}
          height={500}
        />
      </Box>
    </>
  );
};

export default MainImage;
