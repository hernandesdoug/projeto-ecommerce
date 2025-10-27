import useCartStore from '../../store/useCartStore';
import { useNavigate } from 'react-router-dom';

function Carrinho() {
  
    const {items, removeItem, addItem} = useCartStore();

    const total = items.reduce((acc, item) => acc + item.price, 0);

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
          <div>
            <p>Total: USD {total.toFixed(2)}</p>
          </div>
          <div>
            <button onClick={fecharPedido}>Fechar Pedido</button>
            <button onClick={voltarLista}>Voltar</button>
          </div>
        </>
        )}
    </div>    
    );
}

export default Carrinho;