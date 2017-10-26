import * as React from 'react';
import { SFC } from 'react';
import { BindClosures, IMenu } from 'Utils';

interface IMenuPickerProps {
    menus: IMenu[],
    OnMenuChange: (menu: string) => void
}

interface IMenuItemProps {
    id: string,
    menu: string,
    label: string,
    OnMenuChange: (menu: string) => void
}

//onChange={ props.OnMenuChange } 

const MenuItem = BindClosures({
    OnMenuChange: (props: IMenuItemProps, e: React.FormEvent<HTMLInputElement>) => { props.OnMenuChange(props.menu); }
})(
    (props: IMenuItemProps) => (
        <li>
            <input id={ props.id } className="with-gap" name="menus" type="radio" />
            <label htmlFor={ props.id }>{ props.label }</label>
        </li>
    )
);

export default (props: IMenuPickerProps) => 
    <ul>
    {
        props.menus.map((menu: IMenu, index: number) =>
            <MenuItem key={ index }
                      menu={ menu }
                      id={ "menu" + index }
                      label={ menu.title }
                      OnMenuChange={ props.OnMenuChange } />
        )
    }
    </ul>