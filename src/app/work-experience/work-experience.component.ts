import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Frontend Developer',
      company: 'Apple',
      duration: 'Dec 2021 - Present',
      location: 'Suunyvale, California, United States',
      description: [
        'Designing and developing the web application using HTML5, CSS2, Bootstrap, JavaScript, Angular and NodeJS.',
        'Extensive usage of Bootstrap for layout and responsive design and SASS for Responsive design.',
        'Extensively used SASS while styling with CSS3.',
        'Developed AngularJS components such as controllers, services, filters, and models.',
        'Participate in bug management in JIRA.',
        'Used Firebug for debugging and for element styling. Worked on GIT and source tree as version control.',
        'Developed the user interface for back-office support and worked collaboratively with the Agile Scrum team on the design and development of the application.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'DocuSign',
      duration: 'Apr 2020 - Nov 2021',
      location: 'San Francisco, California, United States',
      description: [
        'Created a new Angular Project for Microservice UI.',
        'Redesigning the existing UI using HTML, CSS, JavaScript, AngularJS.',
        'Work with other developers to ensure that the website is functional and visually appealing.',
        'Collaborating with team members on implementation and bug fixes.',
        'Working in an Agile Environment.',
        'Working with Firebase for Authentication, Firestore Database and Hosting.',
        'Working closely with JIRA Board and Confluence Pages.',
        'Creating a Bitbucket Private repository for new project.',
        'Used GIT for version control and for code management.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Intuitive',
      duration: 'Jun 2018 - Mar 2020',
      location: 'Sunnyvale, California, United States',
      description: [
        'Develop new user-facing features using AngularJS, JavaScript, HTML, CSS, and Bootstrap',
        'Build reusable code and libraries for future using JavaScript.',
        'Ensure the technical feasibility of UI/UX designs using Figma.',
        'Optimize application for maximum speed and scalability',
        'Assure that all user input is validated before submitting to the back-end.',
        'Working with Firebase for Authentication, Firestore Database and Hosting.',
        'Working with Agile methodology.',
        'Understanding of the pharmaceutical, life science, or medical device industry.',
        'Implementing data models, databases, and API requests for an efficient and secure',
        'Improved CI/CD, testing, and quality workflow and documentation',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Monsanto',
      duration: 'May 2017 - May 2018',
      location: 'St. Louis City County, Missouri, United States',
      description: [
        'Involved in designing and developing the Web pages using React and JavaScript.',
        'Design and develop Cloud-based Web Applications working with a Scrum team in an Agile Environment.',
        'Developed all the UI pages using HTML, CSS, JSON, JavaScript, AJAX, Bootstrap, React, and NodeJS.',
        'Used IntelliJ as an IDE for the development of the application.',
        'Making changes to the existing web applications and creating new components using React.',
        'Implemented client-side Interface using React.',
        'Working with Agile methodology.',
        'Server-side frameworks such as NodeJS, and Maven are used for the application.',
        'Involved in Automation Infrastructure Development using Selenium.',
        'Created Test cases Using Element locators and Selenium Web driver methods.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Kaiser Permanente',
      duration: 'Feb 2016 - May 2017',
      location: 'Pleasanton, California, United States',
      description: [
        'Involved in design, development, and testing of the application using JavaScript and AngularJS.',
        'Developed UI Layer for the application using AngularJS.',
        'Created multiple components using AngularJS.',
        'The Front end is extensively developed using AngularJS and Bootstrap.',
        'Involved in writing the test cases for the application using JUnit.',
        'Developed UI Layer for the application using AngularJS, HTML5, CSS3, and Bootstrap.',
        'Worked in an Agile environment.',
        'Involved in building a single page and cross-browser compatible web application using AngularJS (Angular routing) and Bootstrap.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'T-Mobile',
      duration: 'Mar 2015 - Jan 2016',
      location: 'Bothell, Washington, United States ',
      description: [
        'Building stable and maintainable codebase unit using Angular.',
        'Recommending solutions for a streamlined, user-friendly interface with the design team.',
        'Performing bug fixes and code reviews.',
        'Performing bug fixes and code reviews.',
        'Ensuring proper documentation and reports in all stages of product life cycles.',
        'Implementing a mobile-first approach to existing websites.',
        'Collaborating with designers to ensure designs were effective and technically sound.',
        'Assisting with the transition from a waterfall method to a more efficient Agile methodology.',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

}
