import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseRegistrationComponent } from './course-registration/course-registration.component';



@NgModule({
  declarations: [CourseDetailsComponent, CourseRegistrationComponent],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
