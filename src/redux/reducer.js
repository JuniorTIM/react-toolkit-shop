import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
  products: [
    {
      id: 1,
      categoryId: 1,
      name: "MacBook",
      price: 100000,
      discount: 3,
      left: 31,
      image: "http://intocode.ru/d/react-project-1/images/1.jpg",
    },
    {
      id: 2,
      categoryId: 1,
      name: "Galaxy",
      price: 35999,
      discount: 0,
      left: 11,
      image: "http://intocode.ru/d/react-project-1/images/2.jpg",
    },
    {
      id: 3,
      categoryId: 3,
      name: "Скутер",
      price: 65500,
      discount: 10,
      left: 0,
      image: "http://intocode.ru/d/react-project-1/images/3.jpg",
    },
    {
      id: 4,
      categoryId: 2,
      name: "Монитор Samsung",
      price: 12000,
      discount: 0,
      left: 7,
      image: "http://intocode.ru/d/react-project-1/images/4.jpg",
    },
    {
      id: 5,
      categoryId: 3,
      name: "Респераторная маска",
      price: 500,
      discount: 0,
      left: 24,
      image: "http://intocode.ru/d/react-project-1/images/5.jpg",
    },
    {
      id: 6,
      categoryId: 2,
      name: "Стиральная машина",
      price: 100000,
      discount: 25,
      left: 0,
      image: "http://intocode.ru/d/react-project-1/images/6.jpg",
    },
    {
      id: 7,
      categoryId: 2,
      name: "Белый холодильник",
      price: 43100,
      discount: 50,
      left: 18,
      image: "http://intocode.ru/d/react-project-1/images/7.jpg",
    },
    {
      id: 8,
      categoryId: 1,
      name: "Колонка",
      price: 3000,
      discount: 0,
      left: 1,
      image: "http://intocode.ru/d/react-project-1/images/8.jpg",
    },
    {
      id: 9,
      categoryId: 1,
      name: "Наушники",
      price: 1500,
      discount: 15,
      left: 5,
      image: "http://intocode.ru/d/react-project-1/images/9.jpg",
    },
  ],
  categories: [
    {
      id: 1,
      name: "Гаджеты и аксессуары",
    },
    {
      id: 2,
      name: "Бытовая техника",
    },
    {
      id: 3,
      name: "Прочее",
    },
  ],
  cartItems: [
    { id: 1, productId: 2, amount: 2 },
    { id: 2, productId: 9, amount: 5 },
  ],
};

export const shopReducer = createReducer(initialState, builder => {
  builder.addCase('add', (state, action) => {
    state.cartItems.push(action.payload)

    state.products.map(element => {
      if (element.id === action.payload.productId) {
        element.left -= action.payload.amount
        return element
      }
      return element
    })

  })
  builder.addCase('delete', (state, action) => {
   state.cartItems = state.cartItems.filter((element) => {
      if (element.productId !== action.payload) {
        return true
      }
      return false
    })
  })
  builder.addCase('plus', (state, action) => {
    state.cartItems = state.cartItems.map(element => {
      if (element.productId === action.payload) {
        element.amount += 1
        return element
      }
      return element
    })
    state.products = state.products.map(element => {
      if (element.id === action.payload) {
        element.left -= 1
        return element
      }
      return element
    })
  })
  builder.addCase('minus', (state, action) => {
    state.cartItems = state.cartItems.map(element => {
      if (element.productId === action.payload) {
        element.amount -= 1
        return element
      }
      return element
    })
    state.products = state.products.map(element => {
      if (element.id === action.payload) {
        element.left += 1
        return element
      }
      return element
    })
  })
});

// Эту функцию трогать не стоит! Она написана, чтобы ты мог в консоле
// наблюдать за тем, какие экшены выполняются и как меняется стейт
const logger = (reducer) => (state, action) => {
  console.log(`action: ${JSON.stringify(action)}`, state);

  return reducer(state, action);
};

export default logger(shopReducer);
