import useCartStore from '../../store/useCartStore';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

function Pedidos() {

    const {items, clearCart} = useCartStore();
    
    return (
        <div>
        <h1>Pedido</h1>
        <> 
        <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.title} - USD {item.price} 
              </li>
            ))}
          </ul>
          <p>Total: USD</p>
          <button onClick={clearCart}>Ir para pagamento</button>
        </>
    </div>    
    );

}

export default Pedidos;