
import useCartStore from '../../store/useCartStore';

function Carrinho() {
  
    const {items, removeItem, clearCart} = useCartStore();
    return (
    <div>
        <h1>Carrinho</h1>
            {items.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
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
        </>
        )}
    </div>    
    );
}

export default Carrinho;