import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor() { }

  courseTitle=""
  courseDuration=""
  courseDescription=""
  courseDate=""
  courseVenue=""


  readViews=()=>{
    let data ={
      "courseTitle":this.courseTitle,
      "courseDuration":this.courseDuration,
      "courseDescription":this.courseDescription,
      "courseDate":this.courseDate,
      "courseVenue":this.courseVenue
      
    }
    console.log(data)
  }
  ngOnInit(): void {
  }

}
