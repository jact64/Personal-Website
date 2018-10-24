import { Component, OnInit } from '@angular/core';
import {NavigationTileClassBuilder} from '../../classes/tiles/NavigationTileClassBuilder';
import {NavigationTile} from '../../classes/tiles/NavigationTile';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public title = 'Welcome to my website';
  private tileBuilder: NavigationTileClassBuilder;
  public tiles: NavigationTile[] = [];
  public breakpoint: number;
  public rowHeight: string;

  ngOnInit(): void {
    this.tileBuilder = new NavigationTileClassBuilder();
    this.addPersonalTile(this.tiles);
    this.addCVTile(this.tiles);
    this.addProjectsTile(this.tiles);
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 3;
    this.rowHeight = (window.innerWidth <= 1450) ? '1:2' : '1:1';
    this.rowHeight = (window.innerWidth <= 1000) ? '1:3' : this.rowHeight;
    this.rowHeight = (window.innerWidth <= 700) ? '1:1' : this.rowHeight;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 3;
    this.rowHeight = (event.target.innerWidth <= 1450) ? '1:2' : '1:1';
    this.rowHeight = (event.target.innerWidth <= 1000) ? '1:3' : this.rowHeight;
    this.rowHeight = (event.target.innerWidth <= 700) ? '1:1' : this.rowHeight;
  }

  addPersonalTile(tiles: NavigationTile[]): void {
    tiles.push(this.tileBuilder.withImg('assets/home/PersonalPicture.png').withContent('About me').withImgText('Me!').withLink('/about').build());
  }

  addCVTile(tiles: NavigationTile[]): void {
    tiles.push(this.tileBuilder.withImg('assets/home/Maths.png').withContent('Read my CV').withImgText('Maths!').withLink('/publicCV').build());
  }

  addProjectsTile(tiles: NavigationTile[]): void {
    tiles.push(this.tileBuilder.withImg('assets/home/Code.png').withContent('View my previous projects').withImgText('Some old HTML code').withLink('/projects').build());
  }
}
