import React, { useState } from 'react';
import CounterContainer from './CounterContainer';
import ItemCount from './ItemCount';

function ItemListContainer() {
  const [cartCount, setCartCount] = useState(0);

  // Función para manejar la adición de productos al carrito
  const handleAddToCart = (quantity) => {
    setCartCount(prevCount => prevCount + quantity);
  };

  // Datos de los productos
  const products = [
    { id: 1, name: 'Café Colombia', price: 5.99, description: 'Café de Colombia 100% arábica.', stock: 10 },
    { id: 2, name: 'Café Etiopía', price: 6.49, description: 'Café de Etiopía con notas afrutadas.', stock: 8 },
    { id: 3, name: 'Café Brasil', price: 4.99, description: 'Café brasileño con un sabor suave y equilibrado.', stock: 12 }
  ];

  return (
    <div>
      <h1>Productos de Café</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <p>{product.description}</p>
            <ItemCount stock={product.stock} onAdd={handleAddToCart} />
            <button onClick={() => handleAddToCart(1)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
      <CounterContainer cartCount={cartCount} />
    </div>
  );
}

export default ItemListContainer;