import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css'],
  inputs: ['image'],
  outputs: ['updateImageEvent', 'deleteImageEvent']
})
export class ImageDetailComponent implements OnInit {
  image: any;

  private editTitle: boolean = false;
  private updateImageEvent = new EventEmitter();
  private deleteImageEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }

  updateImage() {
    this.updateImageEvent.emit(this.image);
  }

  deleteImage() {
    this.deleteImageEvent.emit(this.image);
  }
}
