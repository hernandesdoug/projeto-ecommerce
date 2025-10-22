import { useState, useEffect } from 'react';
import listaProdutos from "../../services/listaProdutos";
import styled from 'styled-components';
import useCartStore from '../../store/useCartStore';

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
                <Title>Produtos</Title>
                <Lista>
                    {produtos.map(product => (
                        <CardProd key={product.id}>
                            <h5>{product.title}</h5>
                            <ImgProd src={product.image} alt={product.title} />
                            <Preco>{product.price} USD</Preco>
                            <BtnCarrinho onClick={() => addItem(product)}>Adicionar ao carrinho</BtnCarrinho>
                        </CardProd>
                    ))}
                </Lista>
            </Container>
        </>
    )
}

const Container = styled.div`
    min-width: 100vw;
    padding: 20px;
    background: #fff;
    border-radius: 1rem;
`;

const Title = styled.h1`
  width: 300px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const ImgProd = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const Preco = styled.p`
    margin-top: 5px;
`;

const CardProd = styled.div`
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
`;

const BtnCarrinho = styled.button`
 padding: 10px;
  border: none;
  border-radius: 5px;
  background: #ffa500;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin-left: 5px;
`;
export default Produtos;