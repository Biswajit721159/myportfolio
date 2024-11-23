import { createSlice } from "@reduxjs/toolkit";

let initialState = {
	portFolioData: {
		introduction: "",
	},
};

const portFolioSlice = createSlice({
	name: "portFolio",
	initialState,
	reducers: {
		addIntroduction: (state, actions) => {
			state.portFolioData.introduction = actions.payload;
		},
	},
});

export const { addIntroduction } = portFolioSlice.actions;
const portFolioReducer = portFolioSlice.reducer;
export default portFolioReducer;
