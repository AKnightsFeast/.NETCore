import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/from";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Observable";

import { GetTuesdays } from 'Utils';
import { LOAD_MENUS, LOAD_DAYS, SHOW_MENU } from 'Constants';
import { ShowMenusForDate, ShowDaysForDate, ShowMenu, LoadMenusErr } from 'Reducers';

const menus = [
    {
        title: "Menu 1",
        content: {
            classic: "Spinach and Feta Spanakopita",
            keto: "Greek Lamb Burgers with Roasted Eggplant, Zucchini and Peppers",
            paleo: "Greek Lamb Burgers with Roasted Eggplant, Zucchini and Peppers",
            veggie: "Spinach and Feta Spanakopita",
            vegan: "Roasted Eggplant, Zucchini and Peppers over Farro"
        }
    },
    {
        title: "Menu 2",
        content: {
            classic: "Soup au Pistou - French Chicken and Lentil Stew",
            keto: "French Chicken and Vegetable Stew",
            paleo: "French Chicken and Vegetable Stew",
            veggie: "French Lentil Stew",
            vegan: "French Lentil Stew"
        }
    },
    {
        title: "Menu 3",
        content: {
            classic: "Thai Chicken and Peanut butter Burgers over Bok Choy and Rice Stir Fry",
            keto: "Thai Chicken and Peanutbutter Burgers over Bok Choy and Pepper Fry",
            paleo: "Thai Chicken and Almond butter Burgers over Bok Choy and Pepper Stir Fry",
            veggie: "Thai Lentil and Peanutbutter Burgers over Bok Choy and Pepper Fry",
            vegan: "Thai Lentil and Peanutbutter Burgers over Bok Choy and Pepper Fry"
        }
    }
];

export const LoadDaysForDateEpic = (action$: any, store: any) =>
    action$
        .ofType(LOAD_DAYS)
        .switchMap((action: any) => {
            const { selectedmonth, selectedyear } = action.payload;
            const tuesdays = GetTuesdays(selectedmonth, selectedyear);

            return Observable.of(
                ShowDaysForDate(tuesdays, tuesdays[0].date)
            );
        });

export const LoadMenusForDateEpic = (action$: any, store: any) =>
    action$
        .ofType(LOAD_MENUS)
        .switchMap((action: any) => {
            let { selecteddate } = action.payload;

            console.log("Getting menus for " + selecteddate + "...");

            // // if the menus for the date have been loaded
            // // pull them from the store...

            // //... otherwise make a REST call

            // return Observable.from(
            //     // put(WORKFLOWURL.PEER_COMPLETE + workflowProcessId, {
            //     //     reviewedById,
            //     //     peerReviewComplete: true
            //     // })
            // )
            // .mergeMap(response => {
                return Observable.of(
                    ShowMenusForDate(menus)
                );
            // })
            // .catch(err => {
            //     console.error("Error loading menus", err);

            //     return Observable.of(LoadMenusErr(err));
            // });
        })
        .catch((error: any, caught: any) => {
            console.error("Error retrieving menus", error);
            return caught;
        });