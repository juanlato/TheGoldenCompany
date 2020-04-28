import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';
import { NumberValueAccessor } from '@angular/forms';

interface validarUser {
  hasError: boolean,
  errorDisplay: string
}
@Injectable({
  providedIn: 'root'
})
export class Service {
  private urlService: string = "/api";
  constructor(private http: HttpClient, private router: Router) { }
  login(nickname,password,typeUser) {
    var form = new FormData();
    form.append("nickname", nickname);
    form.append("password", password);
    form.append("typeUser", typeUser);
    return this.http.post<validarUser>(this.urlService + '/shop/updateItem', form);
  }
}