import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";

const AppChakraProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default AppChakraProvider;
