import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'EPITA - School of Engineering and Computer Science',
      course: 'MSc',
      duration: '2019 - 2021',
      score: '85%',
    },
    {
      institute: 'Northwestern Polytechnic University',
      course: 'MSc',
      duration: '2014 - 2015',
      score: '80%',
    },
    {
      institute: 'Vivekananda Institute of Engineering & Technology',
      course: 'BTech in CS',
      duration: '2009 - 20013',
      score: '61%',
    },
    {
      institute: 'Guntur Vikas Jr. College',
      course: 'Intermediate',
      duration: '2007 - 2009',
      score: '80.1%',
    },
    {
      institute: 'Good Samaritan High School',
      course: 'SSC',
      duration: '2006 - 2007',
      score: '70.8%',
    },
  ] 
constructor() {}

ngOnInit(): void{}

}

