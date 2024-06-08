import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ChakraProvider disableGlobalStyle>
          <App />
        </ChakraProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
