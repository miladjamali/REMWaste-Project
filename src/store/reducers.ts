import { combineReducers } from "@reduxjs/toolkit"
import themeReducer from "./slices/slice"

const rootReducer = combineReducers({
  theme: themeReducer
})

export default rootReducer
