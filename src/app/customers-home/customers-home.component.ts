import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-home',
  templateUrl: './customers-home.component.html',
  styleUrls: ['./customers-home.component.sass']
})
export class CustomersHomeComponent implements OnInit {
  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { }
  public userInfo:any;
  ngOnInit(): void {
    this.userInfo=JSON.parse(sessionStorage.getItem("login")).result[0];
  }


}
