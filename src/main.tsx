import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./index.css";
import HomeMapPage from "./pages/HomeMapPage.tsx";
import PlacePage from "./pages/PlacePage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeMapPage />} />
        <Route path="/place/:slug" element={<PlacePage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
