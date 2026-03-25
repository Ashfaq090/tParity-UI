import { Routes } from "@angular/router";
import { Profile } from "./profile/profile";

export const FEATURES_ROUTE: Routes = [
    {
        path: 'profile',
        component: Profile
    },
    {
        path: '**',
        redirectTo: 'profile',
        pathMatch: 'full'
    }
]