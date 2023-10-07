import { createSlice} from "@reduxjs/toolkit";
import bookBuddyApi from "./bookBuddyApi";

const tokenSlice = createSlice({
    name : "token",
    initialState:null,
    reducers:{
        setToken:(state,{payload}) =>{
        
           return payload.token
        } 
    },

    extraReducers:(builder) => {
        builder.addMatcher(
            bookBuddyApi.endpoints.register.matchFulfilled,
            (state,{payload}) => payload.token
        );

        builder.addMatcher(
            bookBuddyApi.endpoints.login.matchFulfilled,
            (state,{payload})=> payload.token
        );

        builder.addMatcher(
            bookBuddyApi.endpoints.fetchUser.matchFulfilled,
            (state,{payload})=>payload.token
        );

       
    }
});

export default tokenSlice.reducer;

export const {setToken} = tokenSlice.actions;