import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import api from "../../services/api";
import { useEffect } from 'react';

function Usuario () {
    return (
    <>
      <Container>
        <Title>Bem Vindo, Usuario</Title>
        <p>Pedidos</p>
      </Container>
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
export default Usuario;
