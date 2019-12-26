// @flow

export type ItemListType = {
  items: ItemType[],
};

export type ItemType = {
  id: number,
  quantity: number,
  name: string,
  description: string,
};
