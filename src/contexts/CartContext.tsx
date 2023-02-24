import { createContext, PropsWithChildren, useReducer } from 'react'
import {
  addItemAction,
  increaseItemQuantityAction,
  removeItemAction,
} from '../reducers/cart/actions'
import { CartItem, cartReducer } from '../reducers/cart/reducers'

interface CartContextType {
  items: CartItem[]
  addItemToCart: (newItem: CartItem) => void
  removeItemFromCart: (id: number) => void
  increaseItemQuantity: (id: number) => void
  decreaseItemQuantity: (id: number) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: PropsWithChildren) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
  })

  function addItemToCart(newItem: CartItem) {
    const itemInCart = cartState.items.findIndex(
      (item) => item.id === newItem.id,
    )

    if (itemInCart === -1) {
      dispatch(addItemAction(newItem))
    } else {
      dispatch(increaseItemQuantityAction(newItem.id))
    }
  }

  function removeItemFromCart(id: number) {
    dispatch(removeItemAction(id))
  }

  function increaseItemQuantity(id: number) {
    dispatch(increaseItemQuantityAction(id))
  }

  function decreaseItemQuantity(id: number) {
    const itemInCart = cartState.items.findIndex((item) => item.id === id)

    if (cartState.items[itemInCart].quantity === 1) {
      dispatch(removeItemAction(id))
    } else {
      dispatch(increaseItemQuantityAction(id))
    }
  }

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        addItemToCart,
        removeItemFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
