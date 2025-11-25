import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import api from "../../services/api";
import useCartStore from '../../store/useCartStore';
import { useEffect, useState } from 'react';

function Sucesso() {
 const [status] = useState("pago");
  const idUser = localStorage.getItem("ecommerce-iduser");
  const idOrder = localStorage.getItem("ecommerce-idorder");
  const { items } = useCartStore();
  const totalAmount = items.reduce((acc, item) => acc + item.price, 0);

  const orderId = {
    idUser,
    totalAmount,
    status,
  }
  
  const AtualizarStatus = async () => {
    const response = await api.put(`orders/${idOrder}`, orderId);
    console.log(response);
  } 

   useEffect(() => {
        AtualizarStatus();
    }, [])

  const navigate = useNavigate();
  const voltarLoja = () => {
    navigate('/');
  }

  const verPedido = async () => {
    navigate('/usuario');
  }
  return (
    <>
      <Container>
        <Title>🎉 Pagamento Realizado com Sucesso!</Title>
        <p>Obrigado pela compra!</p>
      </Container>
      <BtnVolta>
        <BtnVoltar onClick={voltarLoja}>Volte a loja</BtnVoltar>
        <BtnPedidos onClick={verPedido}>Pedidos</BtnPedidos>
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

const BtnPedidos = styled(BtnVoltar)`
  background: #ccc;
  color: #333;

  &:hover {
    background: #bbb;
  }
`;

const BtnVolta = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;
export default Sucesso;