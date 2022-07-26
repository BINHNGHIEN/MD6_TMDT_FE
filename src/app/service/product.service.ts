import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../model/Product";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) {
  }

  // create(product: Product): Observable<Product> {
  //   const httpOptions = {1
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmhuYnQyIiwiaWF0IjoxNjU4NDEzMjM4LCJleHAiOjE2NTg0OTk2Mzh9.oJMp_uRAJCB5hhdvTKR5G9KvW8R8thH0W37Bu3CGabtYCi0L0HdtucKOX6Qt0kiTd0nUbPH8og3VZ1ivPKt8AA'
  //     })
  //   };
  //   return this.http.post<Product>(environment.API_LOCAL + 'product', product, httpOptions);
  // }

  create(product: Product): Observable<Product> {

    return this.http.post<Product>(environment.API_LOCAL + 'product', product);
  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.API_LOCAL + 'product');
  }
  findById(id: number): Observable<any> {
    return this.http.get(environment.API_LOCAL + 'product/detail/' + id)
  }
  deleteById(id: number): Observable<Product>{
    return this.http.delete<Product>(environment.API_LOCAL + 'product/' +　id);
  }


}
