import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-cv',
  templateUrl: './public-cv.component.html',
  styleUrls: ['./public-cv.component.scss']
})
export class PublicCvComponent implements OnInit {
  pdfSrc: string = 'assets/publicCV/publicCV.pdf';

  constructor() { }

  ngOnInit() {
  }

}
