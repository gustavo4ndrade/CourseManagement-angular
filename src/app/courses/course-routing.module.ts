import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseRegistrationComponent } from './components/course-registration/course-registration.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

const COURSES_ROUTES: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'new', component: CourseRegistrationComponent },
  { path: 'details', component: CourseDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(COURSES_ROUTES)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
