import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers: {
        ChangeLang: (state,action) => {
            state.lang = action.payload
        }
    }
}) 


export const {ChangeLang} = configSlice.actions;
export default configSlice.reducer;