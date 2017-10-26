import { combineEpics } from "redux-observable";

import { LoadDaysForDateEpic, LoadMenusForDateEpic } from './Calendar';

export default combineEpics(
    LoadDaysForDateEpic,
    LoadMenusForDateEpic
);