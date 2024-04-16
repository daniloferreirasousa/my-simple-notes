import { combineReducers } from "redux";

// Reducers 
import noteReducer from "./noteReducer";

const rootReducer = combineReducers({
    note: noteReducer,
});

export default rootReducer;