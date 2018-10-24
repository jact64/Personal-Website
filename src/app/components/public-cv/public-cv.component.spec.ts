import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCvComponent } from './public-cv.component';

describe('PublicCvComponent', () => {
  let component: PublicCvComponent;
  let fixture: ComponentFixture<PublicCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
