import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'ALTUS Hospice',
      duration: 'Jan 2014 - May 2015',
      technologies: 'XCode, Java, iPhone Simulator, JavaScript, MySQL, Database.',
      description: [
        'Developed an iOS app for a healthcare system that helps the patient book a doctor’s appointment.',
      ],
    },
    {
      title: 'Cloud Computing Project',
      technologies: 'JAVA, Swing (JFC), RMIJ2ME, Eclipse, MS-Access',
      duration: 'August 2009 - Sep 2013',
      description: [
        'Cloud Computing Project", Jan 2013 - May 2013. Ensuring the security of data storage in cloud computing ',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  
}
