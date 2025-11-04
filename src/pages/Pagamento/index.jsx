import useCartStore from '../../store/useCartStore';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { loadStripe } from "@stripe/stripe-js";

function Pagamento() {
    const { items } = useCartStore();
 
    const total = items.reduce((acc, item) => acc + item.price, 0);

    const navigate = useNavigate();
    const voltarPedido = () => {
        navigate('/pedidos/');
    }

    const Pagar = async () => {
       
        const response = await fetch('http://localhost:3333/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(items),
        });
        const session = await response.json();
        const url = session.url;
        window.location.href = url;
    };
    return (
        <Container>
            <Title>Finalize seu pagamento</Title>
            <>
                <TotalPagto>
                    <p>Total a pagar: {total.toFixed(2)}</p>
                </TotalPagto>
                <BotoesPagto>
                    <BtnPagar onClick={Pagar}>Pagar</BtnPagar>
                    <BtnVoltar onClick={voltarPedido}>Voltar</BtnVoltar>
                </BotoesPagto>
            </>
        </Container>
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

const BtnPagar = styled(BtnVoltar)`
  background: #ccc;
  color: #333;

  &:hover {
    background: #bbb;
  }
`;

const BotoesPagto = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const TotalPagto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;
export default Pagamento;