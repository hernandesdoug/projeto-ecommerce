import React from 'react';
import useCartStore from '../../store/useCartStore';

function Carrinho() {
  
    const {items, removeItem, clearCart, total} = useCartStore();

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
                {item.title} - R$ {item.price} x {item.quantity}
                <button onClick={() => removeItem(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
          <p>Total: R$ {total()}</p>
          <button onClick={clearCart}>Finalizar compra</button>
        </>
        )}
    </div>    
    );
}

export default Carrinho;