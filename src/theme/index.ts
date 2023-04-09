import { ChakraTheme, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: { initialColorMode: "dark" }
} as Partial<ChakraTheme>);

export default theme;
