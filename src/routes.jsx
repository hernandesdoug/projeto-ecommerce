import { BrowserRouter, Routes, Route } from "react-router-dom";

import Carrinho from "./pages/Carrinho";
import Pedidos from "./pages/Pedidos";
import Produtos from "./pages/Produtos";
import Usuarios from "./pages/Usuarios";
import Pagamento from "./pages/Pagamento";
import Cancelar from "./pages/Cancelar";
import Sucesso from "./pages/Sucesso";

function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="/carrinho/" element={<Carrinho />} />
          <Route path="/pedidos/" element={<Pedidos />} />
          <Route path="/pedidos/:id" element={<Pedidos />} />
          <Route path="/pagamento/" element={<Pagamento />} />
          <Route path="/usuarios/" element={<Usuarios />} />
          <Route path="/success/" element={<Sucesso />} />
          <Route path="/cancel/" element={<Cancelar />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;