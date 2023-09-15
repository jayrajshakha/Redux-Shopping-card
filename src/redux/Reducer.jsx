

import { createSlice } from "@reduxjs/toolkit";

const initialState = []
  

const getter = createSlice({

    name : 'GETdATA',
    initialState,
    reducers : {

        carts : (state, action) => {

            // console.log(state.id);


            state.push(action.payload)
            console.log(state[0], 'a');
            
        },
        delleter : (state, action) => {
              
            return state.filter(f => f.id !== action.payload)

            // console.log(state);


        },
        buyer : (state , action) => {

            return state.filter(f => f.id === action.payload)
            

        }


    }




})

export const {carts, delleter, buyer} = getter.actions

export default getter.reducer