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
  private urlService: string = "https://localhost:44354/api";
  constructor(private http: HttpClient, private router: Router) { }
  login(Username, Password) {
    var form = new FormData();
    form.append("user", Username);
    form.append("password", Password);
    return this.http.post<login>(this.urlService + '/SampleData/login', form);
  }
}
