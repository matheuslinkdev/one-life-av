import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme.ts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommunityPage from "./routes/Community.tsx";
import Navbar from "./components/common/Navbar.tsx";
import Footer from "./components/common/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </Router>
      <Footer/>
    </ChakraProvider>
  </React.StrictMode>
);
