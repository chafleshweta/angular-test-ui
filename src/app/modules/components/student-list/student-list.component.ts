import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/model/student.model';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(
    public studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.studentService.getAllStudent()
  }

  deleteStudent(id: number) {
    console.log(id)
    this.studentService.deleteStudent(id).subscribe(
      (student: StudentModel) => {
        this.studentService.getAllStudent()
      })
  }

  editStudent(student: StudentModel) {
    this.studentService.currentStudent = Object.assign({}, student)
    this.router.navigateByUrl('studentForm')
  }
}
