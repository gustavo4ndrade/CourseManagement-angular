import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './core/components/main/main.component';
import { CoursesModule } from './courses/courses.module';
import { CoursesComponent } from './courses/courses.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},

  { path: 'courses', loadChildren: () => CoursesModule }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
