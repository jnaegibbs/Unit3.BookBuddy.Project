import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import bookBuddyApi from "./bookBuddyApi";  
import tokenReducer from './tokenSlice'


export const store = configureStore({
    reducer : {
        [bookBuddyApi.reducerPath] : bookBuddyApi.reducer,
        token:tokenReducer,
    },

    middleware:(getDefaultMiddleware) =>{
        return getDefaultMiddleware()
        .concat(bookBuddyApi.middleware);
    }
})

export default store;