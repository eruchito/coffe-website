import React from 'react';

function CounterPresentational({ cartCount }) {
  return (
    <div>
      <h2>Contador del Carrito: {cartCount}</h2>
    </div>
  );
}

export default CounterPresentational;