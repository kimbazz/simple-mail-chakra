import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

import Meta from "./Meta";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <Meta />
      <Box margin="8">
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
