import * as React from 'react';

import * as Themed from './themed';
import * as Freezer from './freezer';
import * as Personal from './personal';

const MenuLayout = (props: { title: string, menunav: any, menucontents: any }) =>
    <div>
        <h2 id="menutitle"><i className="fa fa-cutlery"></i> {props.title}</h2>
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col s12 m3">
                        <div id="menunav">
                            { props.menunav }
                        </div>
                    </div>
                    <div className="col s12 m9">
                        <div id="initdiv">
                            Click a menu link to see a menu.
                        </div>
                        { props.menucontents }
                    </div>
                </div>
            </div>
        </div>
    </div>

export const FreezerMenu = () =>
    <MenuLayout title={"Pack Your Freezer Menus"} menunav={Freezer.MenuNav} menucontents={Freezer.MenuContents} />

export const ThemedMenu = () =>
    <MenuLayout title={"Themed Menus"} menunav={Themed.MenuNav} menucontents={Themed.MenuContents} />

export const PersonalMenu = () =>
    <MenuLayout title={"Personal Menus"} menunav={Personal.MenuNav} menucontents={Personal.MenuContents} />