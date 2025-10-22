
import useCartStore from '../../store/useCartStore';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Carrinho() {
  
    const {items, removeItem, clearCart} = useCartStore();

    const navigate = useNavigate();
    const voltarLista = () => {
        navigate('/'); 
    }
    return (
    <div>
        <h1>Carrinho</h1>
            {items.length === 0 ? (
        <p>Seu carrinho está vazio. 
            <button onClick={voltarLista}>Voltar</button>
        </p>
        ) : (
        <> 
        <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.title} - USD {item.price} 
                <button onClick={() => removeItem(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
          <p>Total: USD</p>
          <button onClick={clearCart}>Finalizar compra</button>
          <button onClick={voltarLista}>Voltar</button>
        </>
        )}
    </div>    
    );
}

export default Carrinho;