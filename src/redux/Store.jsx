

import { configureStore } from "@reduxjs/toolkit";
import getter from './Reducer'

export const store = configureStore({
    reducer : {
      // [counterSlice.name]: counterReducer,
      data : getter 
    }

})