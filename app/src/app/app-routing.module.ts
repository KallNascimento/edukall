import {Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CourseComponent } from './components/course/course.component';
import { StudentComponent } from './components/student/student.component';
import { SchoolClassComponent } from './components/school-class/school-class.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes =[
  {path:'home', component: HomeComponent},
  {path:'courses', component: CourseComponent},
  {path:'school-classes', component: SchoolClassComponent},
  {path:'students',component:StudentComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
