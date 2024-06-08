import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { HashRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <HelmetProvider>
        <ChakraProvider disableGlobalStyle>
          <App />
        </ChakraProvider>
      </HelmetProvider>
    </HashRouter>
  </React.StrictMode>
);
