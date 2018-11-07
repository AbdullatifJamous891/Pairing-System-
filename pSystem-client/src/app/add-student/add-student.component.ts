import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  private students:Student[];
  student = {
    name: "",
    level: 0
  }
  constructor(private _studentService:StudentService,private router:Router) { }

  ngOnInit() {
    this.readStudents();
  }
  readStudents(){
    this._studentService.readStudents().subscribe(
      data=>{
        console.log(data);
        this.students = data['msg'];
        this.router.navigate(['/AddStudent'])
      },
      error=>{
        console.log(error);
      }
    )
  }
  addStudent(){
    this._studentService.addStudent(this.student).subscribe(
      data=>{
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )
  }

}
