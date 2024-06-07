const { createSlice } = require("@reduxjs/toolkit");

const initialState={
    clicked:false,
    darkMode:false,

}

const menuSlice = createSlice({
    
    name: 'menuClick',
    initialState,
    reducers:{
        handleMenu:(state, action)=>{
           state.clicked(action.payload)
        }
    }

})

export const {handleMenu} = menuSlice.actions

export default menuSlice.reducer