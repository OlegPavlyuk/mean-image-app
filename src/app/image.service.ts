import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Image} from './image';

@Injectable()
export class ImageService {

  private _getUrl = "/api/images";
  private _postUrl = "/api/image";
  private _putUrl = '/api/image/';
  private _deleteUrl = '/api/image/';

  constructor(private _http: Http) { }

  getImages() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addImage(image: Image) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(image), options)
      .map((response: Response) => response.json());
  }

  updateImage(image: Image) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.put(this._putUrl + image._id, JSON.stringify(image), options)
      .map((response: Response) => response.json());
  }

  deleteImage(image: Image) {
    return this._http.delete(this._deleteUrl + image._id)
      .map((response: Response) => response.json());
  }

}
