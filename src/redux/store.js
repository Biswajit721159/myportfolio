import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import messagesReducer from "./messageSlice";

export default configureStore({
    reducer: {
        userAuth: userReducer,
        messages: messagesReducer,
    }
});