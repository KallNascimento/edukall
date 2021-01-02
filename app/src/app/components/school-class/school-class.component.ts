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
  allCourses: Course[]=[]
  //coursePeriod:String[]
  allClasses: SchoolClass[] = [
    {
      name: 'Informática 1',
      //courseDays: 'Terça-Feira',
      //durationTime: 6,
      _id: '385129475'
    },
    {
      name: 'Informática 2',
      //courseDays: 'Terça-Feira',
      //durationTime: 20,
      _id: '5129058123',
    }
  ]

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
  //durationTime: this.courseTime,
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
