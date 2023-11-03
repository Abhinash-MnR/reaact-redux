import { configureStore } from "@reduxjs/toolkit"; //create react app redux toolkit
import counterReducer from "../reducer/counterSlice"; //import our reducer from step 4
// export default configureStore({
//   reducer: {
//     counter: counterReducer, //add our reducer from step 4
//   },
// });



//import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
   
    reducer:{
        counter:counterReducer
    }
})
console.log(store,"red")
export default store