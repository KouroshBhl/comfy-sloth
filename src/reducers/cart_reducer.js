import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, color, amount, product } = action.payload
      const tempItem = state.cart.find((item) => item.id === id + color)
      console.log(tempItem)

      if (tempItem) {
        const tempCart = state.cart.map((item) => {
          if (item) {
            let newAmount = item.amount + amount
            if (newAmount > item.max) newAmount = item.max
            return { ...item, amount: newAmount }
          } else {
            return item
          }
        })

        return { ...state, cart: tempCart }
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        }
        return { ...state, cart: [...state.cart, newItem] }
      }
    }

    case REMOVE_CART_ITEM: {
      const tempCart = state.cart.filter((item) => item.id !== action.payload)
      return { ...state, cart: tempCart }
    }

    case CLEAR_CART: {
      return { ...state, cart: [] }
    }

    case TOGGLE_CART_ITEM_AMOUNT: {
      console.log('Clicked')
      const { id, value } = action.payload
      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          if (value === 'inc') {
            let newAmount = item.amount + 1
            if (newAmount > item.max) {
              newAmount = item.max
            }
            return { ...item, amount: newAmount }
          }
          if (value === 'dec') {
            let newAmount = item.amount - 1
            if (newAmount < 1) {
              newAmount = 1
            }
            return { ...item, amount: newAmount }
          }
        }
        return item
      })
      return { ...state, cart: tempCart }
    }

    case COUNT_CART_TOTALS: {
      const { totalItems, totalAmount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem
          total.totalItems += amount
          total.totalAmount += price * amount

          return total
        },
        {
          totalItems: 0,
          totalAmount: 0,
        }
      )

      return { ...state, totalItems, totalAmount }
    }

    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default cart_reducer
