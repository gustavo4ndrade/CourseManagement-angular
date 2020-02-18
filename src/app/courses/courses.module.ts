import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseRegistrationComponent } from './components/course-registration/course-registration.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesComponent } from './courses.component';
import { CourseRoutingModule } from './course-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CourseDetailsComponent, 
    CourseRegistrationComponent, 
    CoursesListComponent, 
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,  
  ],
})
export class CoursesModule { }
