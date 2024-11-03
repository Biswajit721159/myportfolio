import { createSlice } from '@reduxjs/toolkit'
const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        messages: [],
    },

    reducers: {
        AddMessage: (state, action) => {
            state.messages = action.payload;
        },
        DeleteMessage: (state, action) => {
            let newMessages = state.messages.filter((data) => {
                return data._id !== action.payload;
            })
            state.messages = newMessages;
        }
    },
})


export const messagesmethod = messagesSlice.actions;
const messagesReducer = messagesSlice.reducer;
export default messagesReducer;