import { configureStore } from '@reduxjs/toolkit';
import { shopReducer } from './reducer';


export const store = configureStore({
    reducer: shopReducer
  })
