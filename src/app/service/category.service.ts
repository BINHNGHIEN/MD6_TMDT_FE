import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Category[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmhuYnQyIiwiaWF0IjoxNjU4NDEzMjM4LCJleHAiOjE2NTg0OTk2Mzh9.oJMp_uRAJCB5hhdvTKR5G9KvW8R8thH0W37Bu3CGabtYCi0L0HdtucKOX6Qt0kiTd0nUbPH8og3VZ1ivPKt8AA'
      })
    };
    return this.http.get<Category[]>(environment.API_LOCAL + 'categories', httpOptions);
  }
}
