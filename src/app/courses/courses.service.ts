import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../shared/models/course.model';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/crud-service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends CrudService<Course>{
  constructor(protected http: HttpClient) {
    super(http, `${environment.API}/courses`);
  }
}
