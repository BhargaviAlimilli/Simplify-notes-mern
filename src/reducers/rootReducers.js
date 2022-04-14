import { combineReducers } from "redux";

import {
    noteCreateReducer,
    noteDeleteReducer,
    noteListReducer,
    noteUpdateReducer,
} from "./noteReducers";
import{
    userLoginReducer,
    userRegisterReducer,
    userUpdateReducer,
} from "./usersReducers";
  
const root = combineReducers({
    noteList: noteListReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    noteCreate: noteCreateReducer,
    noteDelete: noteDeleteReducer,
    noteUpdate: noteUpdateReducer,
    userUpdate: userUpdateReducer,
});

export default root
