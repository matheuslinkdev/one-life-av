import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme.ts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommunityPage from "./routes/Community.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
