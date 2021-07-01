import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { content } from './connect';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  private url: number;
  private full: string;


  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    // eslint-disable-next-line no-underscore-dangle
    this.full = 'https://api.postalpincode.in/pincode/'+ this.url;
    return this.http.get(this.full);
  }

  geturl(value: number) {
    this.url = value;
    //alert('I am Here..');
  }


}
