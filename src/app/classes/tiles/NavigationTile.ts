import {ActionButton} from './ActionButton';

export class NavigationTile {
  public rows: number;
  public cols: number;
  public imgSrc: string;
  public imgAlt: string;
  public content: string;
  public displayActions: boolean;
  public actions: ActionButton[];
  public link: string;

  constructor(rows: number, cols: number, imgSrc: string, imgAlt: string, content: string, displayActions: boolean, actions: ActionButton[], link: string) {
    this.rows = rows;
    this.cols = cols;
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
    this.content = content;
    this.displayActions = displayActions;
    this.actions = actions;
    this.link = link;
  }
}
