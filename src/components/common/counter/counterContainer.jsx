import React from 'react';
import CounterPresentational from './CounterPresentational';

function CounterContainer({ cartCount }) {
  return (
    <CounterPresentational cartCount={cartCount} />
  );
}

export default CounterContainer;