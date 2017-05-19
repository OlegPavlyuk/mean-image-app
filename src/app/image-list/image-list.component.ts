import { Component, OnInit, EventEmitter } from '@angular/core';
import {Image} from '../image';

@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
  inputs: ['images'],
  outputs: ['SelectImage']
})
export class ImageListComponent implements OnInit {

  public SelectImage = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(img: Image) {
    this.SelectImage.emit(img);
  }
}
