import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/Login/Login";
import NovaSenha from "./components/NovaSenha/NovaSenha";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/nova-senha",
    element: <NovaSenha />,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}