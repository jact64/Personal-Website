import { Component } from '@angular/core';
import {Theme} from '../../classes/Theme';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'James Tavernor';
  themes = [
    new Theme('Light Theme', 'light-theme'),
    new Theme('Halloween Theme', 'dark-theme')
  ];
  selectedTheme = this.themes[1];

  links = [
    {link: '/', text: 'Home'},
    {link: '/about', text: 'About me'},
    {link: '/publicCV', text: 'CV'},
    {link: '/projects', text: 'Projects'}
  ];

  constructor(private overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('dark-theme');
  }

  public theme(): string {
    return this.selectedTheme.className;
  }

  // below functions mostly not used but can come in useful at a later date
  public toggleTheme(): void {
    this.selectedTheme = this.themes[(this.themes.indexOf(this.selectedTheme) + 1) % this.themes.length];
    this.updateOverlayContainer();
  }

  public setThemeIndex(theme: number): void {
    this.selectedTheme = this.themes[theme % this.themes.length];
    this.updateOverlayContainer();
  }

  public updateOverlayContainer() {
    this.themes.forEach(theme => {
      if (this.overlayContainer.getContainerElement().classList.contains(theme.className)) {
        this.overlayContainer.getContainerElement().classList.remove(theme.className);
      }
    });
    this.overlayContainer.getContainerElement().classList.add(this.theme());
  }
}
