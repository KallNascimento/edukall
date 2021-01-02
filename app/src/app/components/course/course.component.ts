import { CourseService } from '../../services/course.service';
import { Course } from '../../interfaces/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courseName: String = ''
  courseTime: Number
  //coursePeriod:String[]
  allCourses: Course[] = [
    {
      name: 'Informática Aplicada',
      //courseDays: 'Terça-Feira',
      durationTime: 6,
      _id: '385129475'
    },
    {
      name: 'Assistente Administrativo Completo',
      //courseDays: 'Terça-Feira',
      durationTime: 20,
      _id: '5129058123',
    }
  ]

  constructor(
private courseService: CourseService

  ) { }

  ngOnInit() {
   this.getCourses()
  }
  getCourses(){
    this.courseService.get().subscribe((courses)=>this.allCourses = courses)
  }
  save() {
    this.courseService.add({
      name: this.courseName,
      durationTime: this.courseTime,
      //courseDays:this.coursePeriod,
    }).subscribe(
      (course)=>{
        console.log(course)
        this.clearFields()

      },
      (err)=>console.error(err))
    console.log("Salvou")
  }

  cancel() {
    console.log("cancelado")
  }
  edit(course: Course) {
    console.log('Editado')
  }
  delete(course: Course) {
    console.log('Sumiu :D')
  }
  clearFields(){
    this.courseName = ''
    this.courseTime = 0
  }
}
