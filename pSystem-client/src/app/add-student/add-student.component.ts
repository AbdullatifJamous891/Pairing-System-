import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { Student } from '../student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  private students:Student[];
  constructor(private _studentService:StudentService) { }

  ngOnInit() {
    this.readStudents();
  }
  readStudents(){
    this._studentService.readStudents().subscribe(
      data=>{
        console.log(data);
        this.students = data['msg'];
      },
      error=>{
        console.log(error);
      }
    )
  }

}
