import { CourseService } from '../../services/course.service';
import { Course } from '../../interfaces/course';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courseName: String = ''
  courseTime: Number
  //coursePeriod:String[]
  allCourses: Course[]
  courseEdit: Course = null
  private unsubscribe$ :Subject<any> = new Subject()

  constructor(
    private courseService: CourseService,
    private snackBar:MatSnackBar,
  ) { }

  ngOnInit() {
    this.getCourses()
  }
  ngOnDestroy (){
    this.unsubscribe$.next()
  }
  getCourses() {
    this.courseService.get()
    .pipe( takeUntil(this.unsubscribe$))
    .subscribe((courses) => this.allCourses = courses)
  }
  save() {
    if (this.courseEdit) {
      this.courseService.update(
        { name: this.courseName,
          durationTime:this.courseTime,
          _id: this.courseEdit._id }
        ).subscribe(
          (course)=>{
              this.notify("Atualizado com sucesso!")
              this.clearFields()
          },
          (err)=>{
            this.notify("Erro!")
            console.error(err)
          }
        )
    }
    else {
      this.courseService.add({
        name: this.courseName,
        durationTime: this.courseTime,
        //courseDays:this.coursePeriod,
      }).subscribe(
        (course) => {
          console.log(course)
          this.clearFields()
          this.notify("Cadastrado com sucesso!")
        },
        (err) => console.error(err))
      console.log("Salvou")
    }
  }

  cancel() {
    console.log("cancelado")
  }
  edit(course: Course) {
    this.courseName = course.name
    this.courseTime = course.durationTime
    this.courseEdit = course
  }
  delete(course: Course) {
    this.courseService.del(course).subscribe(
      ()=> this.notify("Registro apagado!"),
      (err) => console.log(err)
    )
  }
  clearFields() {
    this.courseName = ''
    this.courseTime = 0
    this.courseEdit = null
  }

  notify(msg: string){
    this.snackBar.open(msg, "OK", {duration:3000})
  }
}
