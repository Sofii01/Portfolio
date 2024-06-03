import { Component } from '@angular/core';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent {

  projects = [
    {
      img: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      github: "https://github.com/user/repo1",
      deploy: "https://deploy.url1",
      title: "NameProyect1",
      description: "Short description about project 1",
      skills: ["skill 1", "skill 2", "skill 3"],
      expanded: false
    },
    {
      img: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      github: "https://github.com/user/repo2",
      deploy: "https://deploy.url2",
      title: "NameProyect2",
      description: "Short description about project 2",
      skills: ["skill 1", "skill 2", "skill 3"],
      expanded: false
    },
    {
      img: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      github: "https://github.com/user/repo3",
      deploy: "https://deploy.url3",
      title: "NameProyect3",
      description: "Short description about project 3",
      skills: ["skill 1", "skill 2", "skill 3"],
      expanded: false
    }
  ];

  toggleExpand(project: any) {
    project.expanded = !project.expanded;
  }
}
