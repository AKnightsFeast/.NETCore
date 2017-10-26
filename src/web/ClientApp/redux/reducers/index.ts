import { combineReducers } from "redux";

import MonthlyMenuReducer from "Reducers/Calendar";

export default combineReducers({
    monthlymenu: MonthlyMenuReducer
});