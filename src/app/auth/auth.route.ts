import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { ForgetPassword } from "./forget-password/forget-password";
import { Register } from "./register/register";

export const AUTH_ROUTES: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'forget-password',
        component: ForgetPassword
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];