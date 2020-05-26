import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Subscription, Observable } from "rxjs";

interface login {
  result: any,
  hasError: boolean,
  errorDesc: string
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private urlService: string = "/api";
  constructor(private http: HttpClient, private router: Router) { }
  login(Username, Password) {
    var form = new FormData();
    form.append("user", Username);
    form.append("password", Password);
    return this.http.post<login>(this.urlService + '/SampleData/login', form);
  }
  registro(name,lastname,birthday,idDocument,email,password,userType) {
    var form = new FormData();
    form.append("name", name);
    form.append("lastname", lastname);
    form.append("birthday", birthday);
    form.append("idDocument", idDocument);
    form.append("email", email);
    form.append("password", password);
    form.append("userType", userType);
    return this.http.post<login>(this.urlService + '/SampleData/registro', form);
  }
  geoCode(dir){
    return this.http.get<login>("https://maps.googleapis.com/maps/api/geocode/json?address="+dir+"&key=AIzaSyA_VYyQbgpY2wLb7B_5Wh4rrrM9d3TWupg");
  }
}
