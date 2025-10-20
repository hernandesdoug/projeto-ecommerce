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
                console.log("", response.status);
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
            <div>
                <h1>Produtos</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {produtos.map(product => (
                        <div key={product.id} style={{ margin: '20px' }}>
                            <h3>{product.title}</h3>
                            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
                            <p>{product.price} USD</p>
                            <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default Produtos;