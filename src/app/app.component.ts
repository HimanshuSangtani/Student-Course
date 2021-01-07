import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Student-Course';

  addCoursevalue = false;
  addStudentvalue = false;

  CourseVal: String;
  StudentVal: String;

  //Arrays to store objects
  Student = [];
  Course = [];

  //For adding Courses
  addCourse(form: NgForm) {
    this.addCoursevalue = true;
    this.Course.push(form.value);
    console.log(this.Course);
  }

  //For adding Students
  addStudent(form: NgForm) {
    this.addStudentvalue = true;
    this.Student.push(form.value);
    console.log(this.Student);
  }

  //When we'll click student it'll set the val=true
  openStudent() {
    this.addStudentvalue = true;
  }

  //When we'll click Couse it'll set the val=true
  openCourse() {
    this.addCoursevalue = true;
  }

  //When we'll click student it'll set the val=false
  closeStudent(form: NgForm) {
    form.reset();
    this.addStudentvalue = false;
  }

  //When we'll click Couse it'll set the val=false
  closeCourse(form: NgForm) {
    form.reset();
    this.addCoursevalue = false;
  }
}
