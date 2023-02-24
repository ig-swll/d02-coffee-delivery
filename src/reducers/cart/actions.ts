import { CartItem } from './reducers'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY',
  DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY',
}

export type ActionTypesProps =
  | { type: ActionTypes.ADD_ITEM; payload: { item: CartItem } }
  | { type: ActionTypes.REMOVE_ITEM; payload: { itemId: number } }
  | { type: ActionTypes.INCREASE_ITEM_QUANTITY; payload: { itemId: number } }
  | { type: ActionTypes.DECREASE_ITEM_QUANTITY; payload: { itemId: number } }

export function addItemAction(item: CartItem): ActionTypesProps {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  }
}

export function removeItemAction(itemId: number): ActionTypesProps {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  }
}

export function increaseItemQuantityAction(itemId: number): ActionTypesProps {
  return {
    type: ActionTypes.INCREASE_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  }
}

export function decreaseItemQuantityAction(itemId: number): ActionTypesProps {
  return {
    type: ActionTypes.DECREASE_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  }
}
