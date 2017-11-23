import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory, History } from 'history';
//import { ConnectedRouter } from 'react-router-redux';
import { Router } from 'react-router-dom';

import Site from 'Components/site';
import CreateStore, { IApplicationState } from 'Stores';

//let hotRoutes = Routes;

let $ = require('jquery');
let Materialize = require('materialize-css');

//require('./assets/css/menus.css');

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
const browserHistory = createBrowserHistory({ basename: baseUrl }) as History;

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window as any).initialReduxState as IApplicationState;
const store = CreateStore(browserHistory, initialState);

const RenderApp = (site: any) =>
    render(
        <AppContainer>
            <Provider store={store}>
                <Router history={browserHistory}>
                    {site}
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );

RenderApp(<Site />);

$(function () {
    let $window = $(window);

    $("a#scrolltop").click(function () {
        $window.scrollTop(0);
    });

    $('.sidenav-activator').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });

    $('.dropdown-activator').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
    });

    $('.collapsible').collapsible();

    $('.parallax').parallax();

    Materialize.scrollFire([
        { selector: '#question', offset: 80, callback: (el: any) => { Materialize.showStaggeredList($(el)); } },
        { selector: '#answer', offset: 130, callback: (el: any) => { Materialize.showStaggeredList($(el)); } }
        //, { selector: '#chefquestion', offset: 140, callback: 'Materialize.showStaggeredList("#chefquestion")' }
    ]);

    var offset = 0.8;
    var timelineBlocks = $('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $window.on('scroll', function () {
        (!window.requestAnimationFrame)
            ? setTimeout(function () { showBlocks(timelineBlocks, offset); }, 100)
            : window.requestAnimationFrame(function () { showBlocks(timelineBlocks, offset); });
    });

    function hideBlocks(blocks: any, offset: number) {
        blocks.each(function (i: number, e: any) {
            var $e = $(e);
            ($e.offset().top > $window.scrollTop() + $window.height() * offset) && $e.find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    }

    function showBlocks(blocks: any, offset: number) {
        blocks.each(function (i: number, e: any) {
            var $e = $(e);
            ($e.offset().top <= $window.scrollTop() + $window.height() * offset && $e.find('.cd-timeline-img').hasClass('is-hidden')) && $e.find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }
});

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('Components/site', () => {
        //hotRoutes = require<typeof Routes>('Components/routes');
        const NextSite = require('Components/site').default;
        RenderApp(<NextSite />);
    });
}