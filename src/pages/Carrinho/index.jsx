import useCartStore from '../../store/useCartStore';
import { useNavigate } from 'react-router-dom';

function Carrinho() {
  
    const {items, removeItem, addItem} = useCartStore();

    const navigate = useNavigate();
    const voltarLista = () => {
        navigate('/'); 
    }
   
    function fecharPedido () {
        addItem(items);
        navigate('/pedidos/');
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
            {items.map((item, index) => (
              <li key={index}>
                {item.title} - USD {item.price} 
                <button onClick={() => removeItem(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
          <p>Total: USD</p>
          <button onClick={fecharPedido}>Fechar Pedido</button>
          <button onClick={voltarLista}>Voltar</button>
        </>
        )}
    </div>    
    );
}

export default Carrinho;