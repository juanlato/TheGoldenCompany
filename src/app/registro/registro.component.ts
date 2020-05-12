import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this.route.navigate([""]);
  }
  backToPage(){
    this.route.navigate([""]);
  }

}
