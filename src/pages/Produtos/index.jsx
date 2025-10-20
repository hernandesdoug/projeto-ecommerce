import { useState, useEffect } from 'react';
import listaProdutos from "../../services/listaProdutos";
import styled from 'styled-components';

function Produtos() {
    const [produtos, setProdutos] = useState([]);

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
                            <h4>{product.title}</h4>
                            <ImgProd src={product.image} alt={product.title} />
                            <Preco>{product.price} USD</Preco>
                            <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
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
  width: 250px;
  height: auto;
`;

const Preco = styled.p`
    margin: 8px 0;
`;

const CardProd = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
`;
const BtnCarrinho = styled.button`
`;
export default Produtos;