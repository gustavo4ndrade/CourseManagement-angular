import {ModuleWithProviders } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule} from "@angular/router"
import { CoursesComponent } from './courses/courses.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'courses', component: CoursesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);