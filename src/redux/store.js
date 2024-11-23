import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import messagesReducer from "./messageSlice";
import portFolioReducer from "./portFolioSlice";

export default configureStore({
	reducer: {
		userAuth: userReducer,
		messages: messagesReducer,
		portFolio: portFolioReducer,
	},
});
