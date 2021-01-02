import { Course } from '../interfaces/course';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  readonly url = 'http://localhost:4201/courses'

  private coursesSubject$: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>(null)
  private loaded: boolean = false

  constructor(private http: HttpClient) {

  }

  get(): Observable<Course[]> {
    if (!this.loaded) {
      this.http.get<Course[]>(this.url)
        .pipe(tap((courses) => console.log(courses)))
        .subscribe(this.coursesSubject$);
      this.loaded = true
    }
    return this.coursesSubject$.asObservable();
  }
  add(c: Course): Observable<Course> {
    return this.http.post<Course>(this.url, c)
      .pipe(
        tap((cour: Course) => this.coursesSubject$.getValue().push(cour)))
  }
  del(c: Course): Observable<any> {
    return this.http.delete(`${this.url}/${c._id}`).pipe(
      tap(() => {
        let courses = this.coursesSubject$.getValue();
        let i = courses.findIndex(c => c._id === c._id)
        if (i >= 0)
          courses.splice(i, 1)
      })
    )
  }
  update(course: Course): Observable<Course> {
    return this.http.patch<Course>(`${this.url}/${course._id}`, course)
      .pipe(
        tap((c) => {
          let courses = this.coursesSubject$.getValue();
          let i = courses.findIndex(c => c._id === course._id)
          if (i >= 0)
            courses[i].name = c.name
            courses[i].durationTime = c.durationTime

        })
      )
  }
}
