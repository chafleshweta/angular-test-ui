import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/model/student.model';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup = this.fb.group({
    firstname: ['', Validators.required],
    middlename: ['', Validators.required],
    lastname: ['', Validators.required],
    gender: ['', Validators.required],
    birthdate: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],
    zip: ['', Validators.required]
  })

  constructor(
    public studentService: StudentService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  save(student: StudentModel) {
    console.log(student)
    if (student.id === null) {
      console.log('CREATE STUDENT')
      this.createStudent(student)
    } else {
      console.log('UPDATE STUDENT')
      this.updateStudent(student)
    }
  }

  createStudent(currentStudent: StudentModel) {
    this.studentService.createStudent(currentStudent).subscribe(
      (currentStudent: StudentModel) => {
        this.clear()
        this.router.navigateByUrl('studentList')
      })
  }

  updateStudent(currentStudent: StudentModel) {
    this.studentService.updateStudent(currentStudent).subscribe(
      (currentStudent: StudentModel) => {
        this.clear()
        this.router.navigateByUrl('studentList')
      })
  }

  clear() {
    this.studentService.currentStudent = {
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
  }
}
