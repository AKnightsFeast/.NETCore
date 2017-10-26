import { GetTuesdays, ITuesday } from 'Utils';

const todaysDate = new Date();
const todaysMonth = todaysDate.getMonth();
const todaysYear = todaysDate.getFullYear();

export interface IMenu
{
    title?: string,
    content?: {
        classic: string,
        keto: string,
        paleo: string,
        veggie: string,
        vegan: string
    }
}

export interface ICalendar
{
    menus: IMenu[],
    selectedmenu: IMenu,
    selectedyear: number,
    selectedmonth: number,
    days: ITuesday[],
    selecteddate: Date
}

export default {
    menus: [],
    selectedmenu: { },
    selectedyear: todaysYear,
    selectedmonth: todaysMonth,
    days: GetTuesdays(todaysMonth, todaysYear),
    selecteddate: new Date(todaysYear, todaysMonth, todaysDate.getDate())
} as ICalendar;