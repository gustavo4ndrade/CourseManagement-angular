import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import { DashbordComponent } from './dashbord/dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorComponent,
    StudentComponent,
    ClassComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
