import { useState, useEffect } from 'react';
import listaProdutos from "../../services/listaProdutos";
import styled from 'styled-components';
import useCartStore from '../../store/useCartStore';
import { Link } from 'react-router-dom';

function Produtos() {
    const [produtos, setProdutos] = useState([]);

    const addItem = useCartStore((state) => state.addItem);

    async function carregaProdutos() {
        try {
            const response = await listaProdutos.get("/products")
            if (response.status === 200) {
                setProdutos(response.data);
            } else {
                console.log("Fail loading data", response.status);
            }
        } catch (error) {
            console.error("Unexpected error!", error);
        }
    }
    useEffect(() => {
        carregaProdutos();
    }, [])

    return (
        <>
            <Container>
                <Header>
                    <Title>🛍️ Produtos</Title>
                    <CarrinhoLink to="/carrinho">Carrinho</CarrinhoLink>
                </Header>
                
                <Lista>
                    {produtos.map(product => (
                        <CardProd key={product.id}>
                            <ImgProd src={product.image} alt={product.title} />
                            <CardInfo>
                                <h4>{product.title}</h4>
                                <Preco>{product.price} USD</Preco>
                                <BtnCarrinho onClick={() => addItem(product)}>Adicionar ao carrinho</BtnCarrinho>
                            </CardInfo>   
                        </CardProd>
                    ))}
                </Lista>
            </Container>
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

const Header = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const Title = styled.h1`
   font-size: 2rem;
   color: #333;
`;

const CarrinhoLink = styled(Link)`
  text-decoration: none;
  background: #ff8c00;
  color: white;
  padding: 10px 18px;
  border-radius: 6px;
  font-weight: bold;
  transition: all 0.2s ease;
  
  &:hover {
    background: #ffa733;
    transform: scale(1.05);
  }
`;

const Lista = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
`;

const ImgProd = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-top: 15px;
`;

const Preco = styled.p`
    margin: 10px 0;
    font-weight: bold;
    color: #27ae60;
    font-size: 1.1rem;
`;

const CardProd = styled.div`
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  text-align: center;
  transition: all 0.25s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.4);
  }
  
`;

const CardInfo = styled.div`
  padding: 15px;
  text-align: center;

  h4 {
    font-size: 1rem;
    color: #333;
    height: 40px;
    overflow: hidden;
  }
`;

const BtnCarrinho = styled.button`
 padding: 8px 14px;
  border: none;
  border-radius: 6px;
  background: #ffa500;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
 
  &:hover {
    background: #ffa733;
    transform: scale(1.05);
  }
`;
export default Produtos;