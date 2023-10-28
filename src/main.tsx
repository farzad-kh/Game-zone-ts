import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider,ColorModeScript  } from "@chakra-ui/react";
import theme from "./components/theme/theme.ts";



ReactDOM.createRoot(document.getElementById("root")!).render(

 
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme?.config?.initialColorMode} />
      <App />
    </ChakraProvider>

);
