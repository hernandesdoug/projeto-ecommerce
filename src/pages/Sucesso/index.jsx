import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Sucesso () {
   
    const navigate = useNavigate();
    const voltarProd = () => {
        navigate('/produtos/');
    }



    return (
        <>
        <div>

        </div>
        </>
    )
}

export default Sucesso;