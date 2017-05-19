import { Component, OnInit } from '@angular/core';
import {Image} from '../image';
import {ImageService} from '../image.service';

@Component({
  selector: 'image-center',
  templateUrl: './image-center.component.html',
  styleUrls: ['./image-center.component.css'],
  providers: [ImageService]
})
export class ImageCenterComponent implements OnInit {

 images: Image[];

  selectedImage: Image;
  private hideNewImage: boolean = true;

  constructor(private _imageService: ImageService) { }

  ngOnInit() {
    this._imageService.getImages()
      .subscribe(resImageData => this.images = resImageData);
  }

  onSelectImage(image: any) {
    this.selectedImage = image;
    this.hideNewImage = true;
    console.log(this.selectedImage);
  }

  onSubmitAddImage(image: Image) {
    this._imageService.addImage(image)
      .subscribe(resNewImage => {
        this.images.push(resNewImage);
        this.hideNewImage = true;
        this.selectedImage = resNewImage;
      }); 
  }

  onUpdateImageEvent(image: any) {
    this._imageService.updateImage(image)
      .subscribe(resUpdatedImage => image = resUpdatedImage);
    this.selectedImage = null;
  }

  onDeleteImageEvent(image: any) {
    let imageArray = this.images;
    this._imageService.deleteImage(image)
      .subscribe(resDeletedImage => {
        for(let i=0; i < imageArray.length; i++) {
          if(imageArray[i]._id === image._id) {
            imageArray.splice(i,1);
          }
        }
      });
    this.selectedImage = null;
  }

  newImage() {
    this.hideNewImage = false;
  }

}
