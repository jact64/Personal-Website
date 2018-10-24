import {ActionButton} from './ActionButton';
import {NavigationTile} from './NavigationTile';

export class NavigationTileClassBuilder {
  private rows: number;
  private cols: number;
  private imgSrc: string;
  private imgAlt: string;
  private content: string;
  private displayActions: boolean;
  private actions: ActionButton[];
  private link: string;

  constructor() {
    this.reset();
  }

  public withRows(rows: number): NavigationTileClassBuilder {
    this.rows = rows;
    return this;
  }

  public withCols(cols: number): NavigationTileClassBuilder {
    this.cols = cols;
    return this;
  }

  public withImg(img: string): NavigationTileClassBuilder {
    this.imgSrc = img;
    return this;
  }

  public withImgText(text: string): NavigationTileClassBuilder {
    this.imgAlt = text;
    return this;
  }

  public withContent(content: string): NavigationTileClassBuilder {
    this.content = content;
    return this;
  }

  public withAction(actionText: string): NavigationTileClassBuilder {
    this.displayActions = true;
    this.actions.push(new ActionButton(actionText));
    return this;
  }

  public withLink(link: string): NavigationTileClassBuilder {
    this.link = link;
    return this;
  }

  public reset(): void {
    this.rows = 1;
    this.cols = 1;
    this.imgSrc = null;
    this.imgAlt = null;
    this.content = null;
    this.displayActions = false;
    this.actions = [];
  }

  public build(): NavigationTile {
    const tile = new NavigationTile(this.rows, this.cols, this.imgSrc, this.imgAlt, this.content,
      this.displayActions, this.actions, this.link);
    this.reset();
    return tile;
  }
}

