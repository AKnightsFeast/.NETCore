import * as React from 'react';
import { compose, lifecycle } from 'recompose';

import * as $ from 'jquery';

import * as Themed from './themed';
import * as Freezer from './freezer';
import * as Personal from './personal';

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

const MenuLayout = (props: { title: string, menunav: any, menucontents: any }) =>
    <div>
        <h2 id="menutitle"><i className="fa fa-cutlery"></i> {props.title}</h2>
        <input id="currentMenu" type="hidden" value="initdiv" />
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col s12 m3">
                        <div id="menunav">
                            {props.menunav}
                        </div>
                    </div>
                    <div className="col s12 m9">
                        <div id="initdiv">
                            Click a menu link to see a menu.
                        </div>
                        {props.menucontents}
                    </div>
                </div>
            </div>
        </div>
    </div>

export const FreezerMenu = compose(
    lifecycle({
        componentDidMount: () => { InitializeMenuLinks(); },
        shouldComponentUpdate: () => false
    })
)(() => <MenuLayout title={"Pack Your Freezer Menus"} menunav={Freezer.MenuNav} menucontents={Freezer.MenuContents} />);

export const ThemedMenu = compose(
    lifecycle({
        componentDidMount: () => { InitializeMenuLinks(); },
        shouldComponentUpdate: () => false
    })
)(() => <MenuLayout title={"Themed Menus"} menunav={Themed.MenuNav} menucontents={Themed.MenuContents} />);

export const PersonalMenu = compose(
    lifecycle({
        componentDidMount: () => { InitializeMenuLinks(); },
        shouldComponentUpdate: () => false
    })
)(() => <MenuLayout title={"Personal Menus"} menunav={Personal.MenuNav} menucontents={Personal.MenuContents} />);