import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, empty } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Course } from 'src/app/shared/models/course.model';
import { CoursesService } from '../../courses.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  preserveWhitespaces: true
})
export class CoursesListComponent implements OnInit {
  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal', { static: true }) deleteModal;

  courses$: Observable<Course[]>;
  error$ = new Subject<boolean>();

  selectedCourse: Course;
  
  constructor(
    private service: CoursesService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh(){
    this.courses$ = this.service.list().pipe(
      catchError(error => {
        console.error(error);
        this.handleError();
        return empty();
      })
    );
  }

  handleError() {
    //this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
    // this.bsModalRef = this.modalService.show(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';
  }

  onDelete(course) {
    this.selectedCourse = course;
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
  }

  onConfirmDelete() {
    this.service.remove(this.selectedCourse.id)
    .subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error => {
        //TODO
        this.deleteModalRef.hide();
      }
    );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
}
