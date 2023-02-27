import { createContext, PropsWithChildren, useEffect, useReducer } from 'react'
import { differenceInMinutes } from 'date-fns'

import {
  addItemAction,
  decreaseItemQuantityAction,
  increaseItemQuantityAction,
  removeItemAction,
  setActiveOrderAction,
  unsetActiveOrderAction,
} from '../reducers/cart/actions'
import { CartItem, cartReducer, OrderData } from '../reducers/cart/reducers'

interface CartContextType {
  items: CartItem[]
  activeOrder: OrderData | null
  addItemToCart: (newItem: CartItem) => void
  removeItemFromCart: (id: number) => void
  increaseItemQuantity: (id: number) => void
  decreaseItemQuantity: (id: number) => void
  setActiveOrder: (orderData: Omit<OrderData, 'creation'>) => void
  unsetActiveOrder: () => void
}

export const CartContext = createContext({} as CartContextType)

const STORAGE_KEY = '@coffee-delivery:cartstate:1.0'

export function CartContextProvider({ children }: PropsWithChildren) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
      activeOrder: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(STORAGE_KEY)
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return {
        items: [],
        activeOrder: null,
      }
    },
  )

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
      dispatch(decreaseItemQuantityAction(id))
    }
  }

  function setActiveOrder(orderData: Omit<OrderData, 'creation'>) {
    dispatch(setActiveOrderAction({ ...orderData, creation: new Date() }))
  }

  function unsetActiveOrder() {
    dispatch(unsetActiveOrderAction())
  }

  useEffect(() => {
    const stateAsJSON = JSON.stringify(cartState)
    localStorage.setItem(STORAGE_KEY, stateAsJSON)
  }, [cartState])

  useEffect(() => {
    let interval: number
    if (cartState.activeOrder) {
      const { creation } = cartState.activeOrder
      interval = setInterval(() => {
        const minDiff = differenceInMinutes(new Date(), new Date(creation))

        if (minDiff >= 2) {
          unsetActiveOrder()
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [cartState.activeOrder])

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        activeOrder: cartState.activeOrder,
        addItemToCart,
        removeItemFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        setActiveOrder,
        unsetActiveOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
