/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { ConnectService } from '../connect.service';
import { content, one } from '../connect';
//import { content1 } from '../PostOffice';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lst: content[];
  lst1: one;
  url: any;
  ab = 0;

  constructor(private apiservice: ConnectService) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {}

  checkfirst(event)
  {
    this.url = event.target.value;
    if (event.target.value.length !== 6){
      alert('PINCODE should be in 6 Numbers');
    }
  }

  sendtoser(){
    console.log(this.url);
    //alert(this.url +' is your PINCODE');
    //Sending URL
    this.apiservice.geturl(this.url);
    //Getting Data
    this.apiservice.getData()
    .subscribe
    (
      data=>
      {
        this.lst = data;
        console.log(data);
      }
    );
  }

}

