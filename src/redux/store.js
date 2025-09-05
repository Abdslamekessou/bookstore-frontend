
import { configureStore } from '@reduxjs/toolkit'
import  cartReducer  from './features/cart/cartSlice'
import booksApi from '../redux/features/books/booksApi'
import ordresApi from './features/orders/ordersApi'

export default configureStore({
    reducer: {
        cart : cartReducer ,
        [booksApi.reducerPath]: booksApi.reducer, 
        [ordresApi.reducerPath] : ordresApi.reducer
    } ,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(booksApi.middleware , ordresApi.middleware),
})
