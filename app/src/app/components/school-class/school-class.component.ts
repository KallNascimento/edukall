import { CourseService } from './../../services/course.service';
import { SchoolClassService } from '../../services/school-class.service';
import {SchoolClass} from '../../interfaces/school-class'
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/course';

@Component({
  selector: 'app-school-class',
  templateUrl: './school-class.component.html',
  styleUrls: ['./school-class.component.scss']
})
export class SchoolClassComponent implements OnInit {

  className: String = ''
  selectedValue=""
  daysOfWeek:String

  allCourses: Course[]
  //coursePeriod:String[]
  allClasses: SchoolClass[]

  constructor(
          private schoolClassService: SchoolClassService,
          private courseService: CourseService
  ) { }

  ngOnInit() {
   this.getClasses()
   this.getCourses()
  }
  getClasses(){
    this.schoolClassService.get().subscribe((classes)=>this.allClasses = classes)
  }
  getCourses(){
    this.courseService.get().subscribe((courses)=>this.allCourses = courses)
  }
  save() {
    this.schoolClassService.add({
      name: this.className,
      course: this.selectedValue,
      days: this.daysOfWeek
      //courseDays:this.coursePeriod,
    }).subscribe(
      (classe)=>{
        console.log(classe)
        this.clearFields()

      },
      (err)=>console.error(err))
    console.log("Salvou")
  }

  cancel() {
    console.log("cancelado")
  }
  edit(classe: SchoolClass) {
    console.log('Editado')
  }
  delete(classe: SchoolClass) {
    console.log('Sumiu :D')
  }
  clearFields(){
    // this.courseName = ''
    // this.courseTime = 0
  }
}
