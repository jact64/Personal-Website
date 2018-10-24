import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from './components/projects/projects.component';
import {IndexComponent} from './components/index/index.component';
import {AboutComponent} from './components/about/about.component';
import {PublicCvComponent} from './components/public-cv/public-cv.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'publicCV', component: PublicCvComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:type', component: ProjectsComponent } // planning to add some tabs/query params to projects tab
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
