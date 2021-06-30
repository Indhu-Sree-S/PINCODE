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

  constructor(private apiservice: ConnectService) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.apiservice.getData()
    .subscribe
    (
      data=>
      {
        this.lst = data;
        //this.lst2 = this.lst1;
        console.log(data);
      }

    );


  }

  Name(y: any) {
    this.lst1 = y;
    return this.lst1.Name;
  }

  BranchType(y: any) {
    this.lst1 = y;
    return this.lst1.BranchType;
  }

  District(y: any) {
    this.lst1 = y;
    return this.lst1.District;
  }

  Division(y: any) {
    this.lst1 = y;
    return this.lst1.Division;
  }

  checkfirst(event)
  {
    this.url = event.target.value;
    if (event.target.value.length !== 6){
      alert('PINCODE should be in 6 Numbers');
    }
  }

  sendtoser(){
    console.log(this.url);
    alert(this.url +' is your PINCODE');
  }

}

