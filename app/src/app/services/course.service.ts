import { Course } from '../interfaces/course';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  readonly url = 'http://localhost:4201/courses'
  constructor(private http: HttpClient) {

  }

  get(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }
  add(c: Course): Observable<Course> {
    return this.http.post<Course>(this.url, c)
  }
}
