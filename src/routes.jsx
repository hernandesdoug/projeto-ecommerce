import { BrowserRouter, Routes, Route } from "react-router-dom";

import Carrinho from "./pages/Carrinho";
import Pedidos from "./pages/Pedidos";
import Produtos from "./pages/Produtos";
import Usuarios from "./pages/Usuarios";

function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="/carrinho/" element={<Carrinho />} />
          <Route path="/pedidos/" element={<Pedidos />} />
          <Route path="/pedidos/:id" element={<Pedidos />} />
          <Route path="/usuarios/" element={<Usuarios />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;