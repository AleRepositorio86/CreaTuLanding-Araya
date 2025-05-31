import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((pet) => (
        <Item key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default ItemList;
