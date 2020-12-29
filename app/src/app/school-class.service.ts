import { HttpClient } from '@angular/common/http';
import { SchoolClass } from './school-class';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolClassService {
  readonly url ='http://localhost:4201/school-classes'
  constructor(private http: HttpClient) { }

get():Observable<SchoolClass[]>{
  return this.http.get<SchoolClass[]>(this.url)
}
add(sc: SchoolClass):Observable<SchoolClass>{
  return this.http.post<SchoolClass>(this.url, sc)
}
}
