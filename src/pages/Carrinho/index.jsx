import styled from 'styled-components';
import useCartStore from '../../store/useCartStore';
import { useNavigate } from 'react-router-dom';

function Carrinho() {

  const { items, removeItem, addItem } = useCartStore();

  const total = items.reduce((acc, item) => acc + item.price, 0);

  const navigate = useNavigate();
  const voltarLista = () => {
    navigate('/');
  }

  function fecharPedido() {
    navigate('/pedidos/');
  }
  return (
    <Container>
      <CarrinhoCont>
        <Title>🛒 Seu Carrinho</Title>
        {items.length === 0 ? (
        <MsgVazio>
            <p>Seu carrinho está vazio.</p>
          <BtnVoltar onClick={voltarLista}>Voltar</BtnVoltar>
        </MsgVazio>
            
        ) : (
        <>
          <Lista>
            {items.map((item, index) => (
              <Item key={index}>
                <ItemInfo>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemPreco>USD {item.price}</ItemPreco>
                </ItemInfo>
               
                <BtnRemove onClick={() => removeItem(item.id)}>Remover</BtnRemove>
              </Item>
            ))}
          </Lista>
          <div>
            <p>Total: USD {total.toFixed(2)}</p>
          </div>
          <BotoesPedido>
            <BtnFechar onClick={fecharPedido}>Fechar Pedido</BtnFechar>
            <BtnVoltar onClick={voltarLista}>Voltar</BtnVoltar>
          </BotoesPedido>
        </>
      )}
      </CarrinhoCont>
    </Container>
  );
}

const Container = styled.div`
  min-width: 100vw;
  background: #f9f9f9;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CarrinhoCont = styled.div`
  background: #fff;
  width: 100%;
  max-width: 700px;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

const MsgVazio = styled.div`
  text-align: center;
  color: #777;
  font-size: 1.1rem;

  p {
    margin-bottom: 20px;
  }
`;

const Lista = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.span`
  font-weight: 600;
  color: #333;
`;

const ItemPreco = styled.span`
  color: #27ae60;
  font-weight: bold;
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

const BotoesPedido = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const BtnFechar = styled(BtnVoltar)`
  background: #ccc;
  color: #333;

  &:hover {
    background: #bbb;
  }
`;  

const BtnRemove = styled.button`
  background: #ff6b6b;
  border: none;
  color: #fff;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ff4d4d;
    transform: scale(1.05);
  }
`;
export default Carrinho;