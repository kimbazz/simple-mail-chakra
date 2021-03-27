import { Box, Link, Text } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";

const MainImage = () => {
  return (
    <>
      <Box marginY={8} maxWidth={400} marginX="auto">
        <Image src="/envelopes.jpg" width={500} height={335} />
      </Box>
      <Text textAlign="center" fontSize="xs">
        <Link href="http://www.freepik.com" isExternal>
          Designed by macrovector / Freepik
        </Link>
      </Text>
    </>
  );
};

export default MainImage;
