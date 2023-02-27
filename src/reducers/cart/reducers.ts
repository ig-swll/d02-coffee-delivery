import { produce } from 'immer'

import { ActionTypes, ActionTypesProps } from './actions'

export interface CartItem {
  id: number
  name: string
  image: string
  price: number
  quantity: number
}

export interface OrderData {
  zipcode: string
  street: string
  number: number
  complement?: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
  creation: Date
}

interface CartState {
  items: CartItem[]
  activeOrder: OrderData | null
}

export function cartReducer(state: CartState, action: ActionTypesProps) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        draft.items.push(action.payload.item)
      })

    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        draft.items = draft.items.filter(
          (item) => item.id !== action.payload.itemId,
        )
      })

    case ActionTypes.INCREASE_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const idx = draft.items.findIndex(
          (item) => item.id === action.payload.itemId,
        )
        draft.items[idx].quantity += 1
      })

    case ActionTypes.DECREASE_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const idx = draft.items.findIndex(
          (item) => item.id === action.payload.itemId,
        )
        draft.items[idx].quantity -= 1
      })

    case ActionTypes.SET_ACTIVE_ORDER:
      return produce(state, (draft) => {
        draft.items = []
        draft.activeOrder = action.payload.orderData
      })

    case ActionTypes.UNSET_ACTIVE_ORDER:
      return produce(state, (draft) => {
        draft.activeOrder = null
      })

    default:
      return state
  }
}
