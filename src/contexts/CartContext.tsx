import { createContext, PropsWithChildren, useState } from 'react'

type CartItem = {
  id: number
  tags: string[]
  name: string
  description: string
  image: string
  price: number
}

interface CartContextType {
  items: CartItem[]
  deliveryActive: boolean
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CartItem[]>([])
  const [deliveryActive, setDeliveryActive] = useState(false)

  return (
    <CartContext.Provider
      value={{
        items,
        deliveryActive,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
