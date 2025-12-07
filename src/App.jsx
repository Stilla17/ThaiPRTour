import { Routes, Route } from "react-router";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Citizen from "./Pages/Citizen";
import Nedvij from "./Pages/Nedvij";
import NedvijInfoPage from "./Pages/NedvijInfoPage";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";

import Admin from "./Pages/Admin";
import { useState } from "react";
import AdminLogin from "./Pages/AdminLogin";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="citizen" element={<Citizen />} />
        <Route path="estate" element={<Nedvij />} />
        <Route path="estate/:id" element={<NedvijInfoPage />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route
        path="/admin"
        element={
          isAdmin ? (
            <Admin />
          ) : (
            <AdminLogin setIsAdmin={setIsAdmin} />
          )
        }
      />
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;
