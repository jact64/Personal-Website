import { Component, OnInit } from '@angular/core';
import {Project} from '../../classes/Project';
import {ProjectService} from '../../services/projects/projects.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  displayedColumns: string[] = ['name', 'desc', 'langs', 'type', 'date', 'link'];

  constructor(public projectService: ProjectService, public router: Router) {
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

}
