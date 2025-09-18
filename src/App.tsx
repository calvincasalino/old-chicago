import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeMapPage from "./pages/HomeMapPage";
import PlacePage from "./pages/PlacePage";
import "./App.css";

function NotFound() {
  return (
    <div className="page">
      <header className="header">
        <h1>Page not found</h1>
        <Link to="/" className="link">← Back to map</Link>
      </header>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomeMapPage />} />
        <Route path="/place/:slug" element={<PlacePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
