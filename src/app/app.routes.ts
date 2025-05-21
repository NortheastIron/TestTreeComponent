import { Routes } from '@angular/router';
import { MainPageComponent } from '@features';

export const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full'},
    { 
        path: 'main',
        component: MainPageComponent
    },
    { path: '**', redirectTo: '/' }
];
