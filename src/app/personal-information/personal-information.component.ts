import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {  
  myData: string[][] = [
    ['Name', 'Kiran Annabomina'],
    ['DOB', '05/05/1992'],
    ['Work Exp', '8 Years'],
    ['Education', 'M.Sc(2014)'],
    ['Interests', 'Gaming'],
  ];

  aboutMe: string[] = [
    'Passionate front-end web developer with 8+ years of experience.',
    'Worked on JavaScript, HTML5, and CSS to build all aspects of the user experience and user interface for client-facing landing pages.',
    'Specializes in using AngularJS plus modern libraries and frameworks to build e-commerce sites.'
  ];

  constructor() { }
  
  ngOnInit(): void { }

}
