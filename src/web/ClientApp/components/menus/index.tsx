import * as React from 'react';
import { compose, lifecycle } from 'recompose';

import * as $ from 'jquery';

import * as Themed from './themed';
import * as Freezer from './freezer';
import * as Personal from './personal';

import 'Assets/css/menus.css';

const InitializeMenuLinks = () =>
{
    $('a.menulnk').click(function () {
        const $link = $(this);
        const $currentMenu = $("#currentMenu");
        const menu = $link.data("menu");

        $('#' + $currentMenu.val()).fadeOut('slow', function () {
            $('#' + menu).fadeIn('slow');
            $currentMenu.val(menu);

            $('a.menulnk.pink-text.darken-4').removeClass("pink-text darken-4");
            $link.addClass("pink-text darken-4");
        });
    });
}

interface MenuLayoutProps {
    title: string,
    menunav: any,
    menucontents: any
};

const MenuLayout: React.StatelessComponent<MenuLayoutProps> = ({ title, menunav, menucontents }: MenuLayoutProps) =>
    <div>
        <h2 id="menutitle"><i className="fa fa-cutlery"></i> {title}</h2>
        <input id="currentMenu" type="hidden" value="initdiv" />
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col s12 m3">
                        <div id="menunav">
                            {menunav}
                        </div>
                    </div>
                    <div className="col s12 m9">
                        <div id="initdiv">
                            Click a menu link to see a menu.
                        </div>
                        {menucontents}
                    </div>
                </div>
            </div>
        </div>
    </div>

const ThemedLayout = <MenuLayout title={"Themed Menus"} menunav={Themed.MenuNav} menucontents={Themed.MenuContents} />
const PersonalLayout = <MenuLayout title={"Personal Menus"} menunav={Personal.MenuNav} menucontents={Personal.MenuContents} />
const FreezerLayout = <MenuLayout title={"Pack Your Freezer Menus"} menunav={Freezer.MenuNav} menucontents={Freezer.MenuContents} />

export const FreezerMenu = compose(
    lifecycle({
        componentDidMount: () => { InitializeMenuLinks(); },
        shouldComponentUpdate: () => false
    })
)(() => FreezerLayout as any);

export const ThemedMenu = compose(
    lifecycle({
        componentDidMount: () => { InitializeMenuLinks(); },
        shouldComponentUpdate: () => false
    })
)(() => ThemedLayout as any);

export const PersonalMenu = compose(
    lifecycle({
        componentDidMount: () => { InitializeMenuLinks(); },
        shouldComponentUpdate: () => false
    })
)(() => PersonalLayout as any);