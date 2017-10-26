import * as React from 'react';
import { BindClosures, ITuesday } from 'Utils';

interface IDayPickerProps {
    days: ITuesday[],
    OnDayChange: (date: string) => void
}

interface IDayItemProps {
    attr: any,
    id: string,
    date: string,
    label: string,
    OnDayChange: (date: string) => void
    //name?: string, // Change the required prop to an optional prop.
}

const DayItem = BindClosures({
    OnDayChange(props: IDayItemProps) { props.OnDayChange(props.date); }
})(
    (props: IDayItemProps) => (
        <li>
            <input id={props.id} onChange={props.OnDayChange}
                name="dates"
                type="radio"
                value={props.date}
                className="with-gap"
                { ...props.attr } />
            <label htmlFor={props.id}>{props.label}</label>
        </li>
    )
);

export default (props: IDayPickerProps) => {
    return (
        <ul>
        {
            props.days.map((day: ITuesday, index: number) => {
                return (
                    <DayItem key={ index }
                             id={ "d" + index }
                             attr={ day.attr }
                             date={ day.date }
                             label={ day.label }
                             OnDayChange={ props.OnDayChange } />
                );
            })
        }
        </ul>
    );
};