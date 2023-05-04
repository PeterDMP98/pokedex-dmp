import { createSlice } from "@reduxjs/toolkit";

const trainerNameSlice = createSlice({
    name: 'userName',
    initialState: '',
    reducers: {
        setTrainerName: (state, action) => action.payload,


    }
})
export const {setTrainerName} = trainerNameSlice.actions //action es quien tienen todos los estados

export default trainerNameSlice.reducer