import * as React from 'react';
import { render } from 'react-dom';
import { compose } from 'recompose';
import { Provider, connect } from 'react-redux';

//import { Icon } from 'react-materialize';

import 'CSS/calendar.css';

import Menu from './Menu';
import DayPicker from './DayPicker';
import MenuPicker from './MenuPicker';
import MonthYearPicker from './MonthYearPicker';
import { LoadDaysForDate, LoadMenusForDate, ShowMenu } from "Reducers/Calendar";

import { IMenu } from 'Stores/Calendar';
import { MonthArray, YearArray, GetFormattedDate, ITuesday  } from "Utils";

/*
const DateButton = ({ onClick, icon }) => <i onClick={ onClick } className='material-icons'>{ icon }</i>
*/

const Calendar = (props: any/*{
    menus: IMenu[],
    days: ITuesday[],
    selecteddate: Date,
    selectedmenu: IMenu,
    selectedyear: number,
    selectedmonth: number,
    OnDayChange: (date: string) => void,
    OnMenuChange: (menu: string) => void,
    OnDateChange: (month: number, year: number) => void
}*/) => {
    const formattedSelectedDate = GetFormattedDate(new Date(props.selecteddate));

    return (
        <div id="MonthlyMenus">
            <div className="row">
                <div className="col s12 m3">
                    <ul>
                        <li className="">
                            <div>
                                <MonthYearPicker OnDateChange={props.OnDateChange}
                                    years={YearArray}
                                    months={MonthArray}
                                    selectedyear={props.selectedyear}
                                    selectedmonth={props.selectedmonth} />
                            </div>
                            <div>
                                <DayPicker OnDayChange={props.OnDayChange} days={props.days} />
                            </div>
                        </li>
                    </ul>

                    <ul>
                        <li className="">
                            <div><i className="material-icons">{"event_note"}</i>{"Menus"}</div>
                            <div>
                                <MenuPicker OnMenuChange={props.OnMenuChange} menus={props.menus} />
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="col s12 m9">
                    <h4>{"Menus for the Week of " + formattedSelectedDate}</h4>
                    <Menu selectedmenu={props.selectedmenu}
                        selecteddate={formattedSelectedDate}
                        selectedmonth={props.selectedmonth} />
                </div>
            </div>
        </div>
    );
};

export default compose(
    connect(
        store => ({
            days: store.monthlymenu.days,
            menus: store.monthlymenu.menus,
            selectedmenu: store.monthlymenu.selectedmenu,
            selecteddate: store.monthlymenu.selecteddate,
            selectedyear: store.monthlymenu.selectedyear,
            selectedmonth: store.monthlymenu.selectedmonth
        }),
        dispatch => ({
            OnDateChange: (month: number, year: number) => { dispatch(LoadDaysForDate(month, year)) },
            OnDayChange: (date: Date) => { dispatch(LoadMenusForDate(date)); },
            OnMenuChange: (menu: string) => { dispatch(ShowMenu(menu)) }
        })
    )
)(Calendar);