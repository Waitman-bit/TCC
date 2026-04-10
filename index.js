import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import NovaSenha from "../components/NovaSenha";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/nova-senha" element={<NovaSenha />} />
      </Routes>
    </BrowserRouter>
  );
}