import * as React from 'react';
import { SFC } from 'react';
import { BindClosures } from 'Utils';

interface IMonthYearPickerProps {
    years: number[],
    months: string[],
    selectedyear: number,
    selectedmonth: number,
    OnDateChange: (month: number, year: number) => void
}

interface IMonthSelectProps {
    months: string[],
    selectedyear: number,
    OnDateChange: SFC<any>
}

interface IYearSelectProps {
    years: number[],
    selectedmonth: number,
    OnDateChange: SFC<any>
}

const MonthSelect = BindClosures({
    OnDateChange: (props: IMonthSelectProps, e: React.FormEvent<HTMLInputElement>) => { props.OnDateChange(e.currentTarget.value, props.selectedyear); }
})(
    (props: IMonthSelectProps) => {
        return (
            <select onChange={ props.OnDateChange } className={ "browser-default" } defaultValue={ new Date().getMonth().toString() }>
            {
                props.months.map((month: string, index: number) => (
                    <option key={ index } value={ index }>{ month }</option>
                ))
            }
            </select>
        );
    }
);

const YearSelect = BindClosures({
    OnDateChange: (props: IYearSelectProps, e: React.FormEvent<HTMLInputElement>) => { props.OnDateChange(props.selectedmonth, e.currentTarget.value); }
})(
    (props: IYearSelectProps) => {
        return (
            <select onChange={ props.OnDateChange } className={ "browser-default" } defaultValue={ new Date().getFullYear().toString() }>
            {
                props.years.map((year: number, index: number) => (
                    <option key={ index } value={ year }>{ year }</option>
                ))
            }
            </select>
        );
    }
);

export default (props: IMonthYearPickerProps) =>
    <div id="MonthYearPicker">
        <div className="monthpicker inline">
            <MonthSelect OnDateChange={ props.OnDateChange }
                         selectedyear={ props.selectedyear }
                         months={ props.months } />
        </div>
        <div className="inline">
            <YearSelect OnDateChange={ props.OnDateChange }
                        selectedmonth={ props.selectedmonth }
                        years={ props.years } />
        </div>
    </div>