import { Injectable } from '@angular/core';
import { StudentModel } from '../model/student.model';
import { HttpClient } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs';

@Injectable()
export class StudentService {

  divUrl: string = 'https://devservices.qpathways.com/otc/test/user'
  allStudent: StudentModel[] = []
  currentStudent: StudentModel = {
    firstname: '',
    middlename: '',
    lastname: '',
    gender: '',
    birthdate: '',
    city: '',
    state: '',
    country: '',
    zip: null as any,
    id: null as any
  }

  constructor(
    private http: HttpClient
  ) { }

  getAllStudent(): Subscription {
    console.log(this.divUrl)
    return this.http.get<StudentModel[]>(this.divUrl).subscribe(
      (data: StudentModel[]) => {
        console.log(data)
        this.allStudent = data
      })
  }

  createStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(this.divUrl + '/' + 'save', student)
  }

  updateStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.put<StudentModel>(this.divUrl + '/' + 'update', student)
  }

  deleteStudent(id: number): Observable<StudentModel> {
    return this.http.delete<StudentModel>(this.divUrl + '/' + 'delete' + '/' + id)
  }
}
