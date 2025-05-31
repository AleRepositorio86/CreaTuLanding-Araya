import React, { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <button onClick={decrement} disabled={count <= 1}>
        -
      </button>
      <input type="text" readOnly value={count} />
      <button onClick={increment} disabled={count >= stock}>
        +
      </button>
      <button className="button-primary" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
