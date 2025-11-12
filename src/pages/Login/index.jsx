import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import api from "../../services/api";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function validateLogin() {
        try {
            const response = await api.post("users/login", { email: email, password: password });
            console.log(response.data);
            if (response.status === 200) {
                 const navigate = useNavigate();
                navigate('/pedido/');
            } else {
                console.log("Login Failed!", response.status);
            }
        } catch (error) {
            console.error("Unexpected error!", error);
        }
    }

    return (
        <>
            <Container>
                <Title>Login</Title>
                <Label htmlFor="email">E-mail</Label>
                <Input type="text" placeholder="enter email..." id="email"
                    onChange={e => setEmail(e.target.value)} />
                <Label htmlFor="password">Senha</Label>
                <Input type="password" placeholder="enter password..." id="password"
                    onChange={e => setPassword(e.target.value)} />
                <DivLogin>
                    <BtnLogin onClick={validateLogin}>Entrar</BtnLogin>
                </DivLogin>
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

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 0.3rem;
`;

const Label = styled.label`
  position: relative;
  text-align: left;
  width: 400px;
  height: 30px;
  margin-bottom: 0%;
`;


const DivLogin = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const BtnLogin = styled.button`
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
export default Login;