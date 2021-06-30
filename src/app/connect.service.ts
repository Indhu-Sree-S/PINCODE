import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { content } from './connect';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  private url = '';


  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    // eslint-disable-next-line no-underscore-dangle
    return this.http.get('https://api.postalpincode.in/pincode/635109');
  }


}
