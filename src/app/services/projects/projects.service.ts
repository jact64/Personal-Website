import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Project} from '../../classes/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('assets/projects/projects.json');
  }

  public formatProgrammingLanguages(project: Project): string {
    if (!project.languages) {
      return 'No languages';
    }
    if (project.languages.length === 1) {
      return project.languages[0];
    }
    const langs = project.languages.slice();
    const final = langs.pop();
    return langs.join(', ').concat(' and ').concat(final);
  }

  public formatLink(project: Project): { link: string, tag: string } {
    if (project.link) {
      return {link: project.link, tag: 'Available'};
    }
    if (project.type.match('.*[Uu]niversity.*')) {
      return {link: '', tag: 'Not publicly available enquire for details'};
    }
    return {link: '', tag: 'Unavailable'};
  }
}
