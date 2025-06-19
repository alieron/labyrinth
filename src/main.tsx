import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./contexts/themeContext";
import Home from "./pages/home";
import SlugPage from "./pages/[...slug]";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="notes/*" element={<SlugPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);