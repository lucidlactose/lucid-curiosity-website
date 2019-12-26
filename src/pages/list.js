// @flow
import React from 'react';
import ItemList from '../shared-item-list';
import type {ItemType} from '../types';

const List = () => (
  <>
    {ItemList.items.map((item: ItemType) => (
      <div key={item.id}>{item.name}</div>
    ))}
    {'something'}
  </>
);

export default List;
