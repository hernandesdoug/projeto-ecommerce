import useCartStore from '../../store/useCartStore';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

function Pedidos() {

    const {items, clearCart} = useCartStore();

    const total = items.reduce((acc, item) => acc + item.price, 0);
    
      const navigate = useNavigate();
      const voltarCarrinho = () => {
          navigate('/carrinho/');
      }
    return (
        <Container>
        <Title>Pedido</Title>
        <> 
        <Lista>
            {items.map((item, index) => (
              <Item key={index}>
                <ItemInfo>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemPreco>USD {item.price}</ItemPreco>
                </ItemInfo>
              </Item>
            ))}
          </Lista>
          <TotalPedido>
            <p>Total: USD {total.toFixed(2)}</p>
          </TotalPedido> 
          <BotoesPedido>
            <BtnPagto onClick={clearCart}>Ir para pagamento</BtnPagto>
            <BtnVoltar onClick={voltarCarrinho}>Volte para o carrinho</BtnVoltar>
          </BotoesPedido>
          
        </>
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

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
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

const BtnPagto = styled(BtnVoltar)`
  background: #ccc;
  color: #333;

  &:hover {
    background: #bbb;
  }
`; 

const BotoesPedido = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const TotalPedido = styled(Item)`
   background: #ccc;
   color: #27ae60;
`;


export default Pedidos;