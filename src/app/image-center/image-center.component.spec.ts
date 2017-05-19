import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCenterComponent } from './image-center.component';

describe('ImageCenterComponent', () => {
  let component: ImageCenterComponent;
  let fixture: ComponentFixture<ImageCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
