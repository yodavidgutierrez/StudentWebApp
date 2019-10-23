import { Injectable } from '@angular/core';
import { Student } from 'src/app/model/studentDTO';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
headers: any;
 user: Observable <Student[]>;
  constructor(private http: HttpClient ) {  
    this.headers = new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'http:localhost:8000/*',
    'Access-Control-Allow-Methods':'POST,PUT,GET,DELETE'
  })
}

getStudents():Observable<any>{
return this.http.get(`${environment.apiStudent}`,{headers:this.headers})
}

CreateStudent(student:Student):Observable<any>{
return this.http.post(`${environment.apiStudent}`, student, {headers:this.headers})
}

updateStudent(student:Student, id:number):Observable<any>{
 student.id = id
 student.age= parseInt(student.age.toString());
return this.http.put(`${environment.apiStudent}/${id}`, student)
}

deleteStudent(id:number):Observable<any>{
return this.http.delete(`${environment.apiStudent}/${id}`)
}

getStudent(id:number):Observable<any>{
return this.http.get(`${environment.apiStudent}/${id}`)
}

}
