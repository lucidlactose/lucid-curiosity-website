// @flow
import React from 'react';
import ItemListValues from './item-list-values';
import type {ItemType} from '../styles';

const ItemListPage = () => (
  <>
    {ItemListValues.items.map((item: ItemType) => (
      <div key={item.id}>{item.name}</div>
    ))}
  </>
);

export default ItemListPage;
