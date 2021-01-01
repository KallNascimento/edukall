import { SchoolClassService } from './../school-class.service';
import { SchoolClass } from './../school-class';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';



@Component({
  selector: 'app-school-class',
  templateUrl: './school-class.component.html',
  styleUrls: ['./school-class.component.scss']
})
export class SchoolClassComponent implements OnInit {

  className: String = ''
  //courseTime: Number
  //coursePeriod:String[]
  allClasses: SchoolClass[] = [
    {
      name: 'Turma 1',
      //courseDays: 'Terça-Feira',
      //durationTime: 6,
      _id: '385129475'
    },
    {
      name: 'Assistente Administrativo Completo',
      //courseDays: 'Terça-Feira',
     // durationTime: 20,
      //_id: '5129058123',
    }
  ]

  constructor(
private classService: SchoolClassService, course:CourseService

  ) { }

  ngOnInit() {
    this.classService.get().subscribe((schoolClasses)=>this.allClasses = schoolClasses)
    
  }

  save() {
    this.classService.add({
      name: this.className,
      //durationTime: this.courseTime,
      //courseDays:this.coursePeriod,
    }).subscribe(
      (schoolClasses)=>{
        console.log(schoolClasses)
        this.clearFields()
      },
      (err)=>console.error(err))
    console.log("Salvou")
  }

  cancel() {
    console.log("cancelado")
  }
  edit(schoolClasses: SchoolClass) {
    console.log('Editado')
  }
  delete(schoolClasses: SchoolClass) {
    console.log('Sumiu :D')
  }
  clearFields(){
    this.className = ''
    //this.courseTime = 0
  }
}
