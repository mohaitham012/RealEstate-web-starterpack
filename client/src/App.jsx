import { Suspense } from "react";
import "./App.css";
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/8-Layout/Layout";
import Properties from "./pages/Properties/Properties";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>} />
      <Routes>
        {/* Wrap all routes under the Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Website />} />
          <Route path="/properties" element={<Properties />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
