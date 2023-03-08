import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Javascript, Typescript, Angular, Node',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'Java, Python, Selenium',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'HTML, CSS, Bootstrap',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Agile, GIT, SVN',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'JSON, JIRA, Scrum, Firebase',
      level: 'Intermidiate',
      rating: 70,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
