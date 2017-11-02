import {
    LOAD_DAYS,
    SHOW_DAYS,
    SHOW_MENU,
    LOAD_MENUS,
    SHOW_MENUS,
    LOAD_MENUS_ERR
} from 'Constants/Calendar';

import { CreateReducer, ITuesday } from 'Utils';
import { IMenu } from 'Stores/Calendar';

export const ShowMenu = (selectedmenu: string) => ({
    type: SHOW_MENU,
    payload: {
        selectedmenu
    }
});

export const LoadMenusForDate = (selecteddate: Date) => ({
    type: LOAD_MENUS,
    payload: {
        selecteddate
    }
});

export const ShowMenusForDate = (menus: IMenu[]) => ({
    type: SHOW_MENUS,
    payload: {
        menus
    }
});

export const LoadMenusErr = () => ({
    type: LOAD_MENUS_ERR
});

export const LoadDaysForDate = (selectedmonth: number, selectedyear: number) => ({
    type: LOAD_DAYS,
    payload: {
        days: [],
        menus: [],
        selectedyear,
        selectedmonth
    }
});

export const ShowDaysForDate = (days: ITuesday[], selecteddate: Date) => ({
    type: SHOW_DAYS,
    payload: {
        days,
        selecteddate
    }
});

export default CreateReducer({ }, {
    [LOAD_DAYS]: (state: object, payload: object) => ({ ...state, ...payload }),
    [SHOW_DAYS]: (state: object, payload: object) => ({ ...state, ...payload }),
    [SHOW_MENU]: (state: object, payload: object) => ({ ...state, ...payload }),
    [LOAD_MENUS]: (state: object, payload: object) => ({ ...state, ...payload }),
    [SHOW_MENUS]: (state: object, payload: object) => ({ ...state, ...payload })
});