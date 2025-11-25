import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import api from "../../services/api";
import { useEffect, useState } from 'react';

function Usuario() {
  const [pedidos, setPedidos] = useState([]);
  const idUser = localStorage.getItem("ecommerce-iduser");

  async function  mostrarPedidos() {
    const response = await api.get("orders", { params: { idUser } });
    setPedidos(response.data);
  }

  useEffect(() => {
    mostrarPedidos();
  }, [])

  const navigate = useNavigate();
  const voltarLoja = () => {
    navigate('/');
  }
  return (
    <>
      <Container>
        <Title>Bem Vindo</Title>
        <p>Seus Pedidos</p>
      </Container>
      <Lista>
        {pedidos.map((pedido) => (
          <Pedido key={pedido.id}>
            <PedidoInfo>
              <PedidoStatus>Status: {pedido.status}</PedidoStatus>
              <PedidoTotal>Total: {pedido.totalAmount}</PedidoTotal>
            </PedidoInfo>
          </Pedido>
        ))}
      </Lista>
      <BtnVolta>
        <BtnVoltar onClick={voltarLoja}>Volte a loja</BtnVoltar>
      </BtnVolta>
    </>
  )
}

const Container = styled.div`
  min-width: 100vw;
  background: #f9f9f9;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

const BtnVoltar = styled.button`
  background: #ff8c00;
  border: none;
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ffa733;
    transform: scale(1.05);
  }
`;

const BtnVolta = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Lista = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Pedido = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

const PedidoInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PedidoStatus = styled.span`
  font-weight: 600;
  color: #333;
`;

const PedidoTotal = styled.span`
  color: #27ae60;
  font-weight: bold;
`;

export default Usuario;
