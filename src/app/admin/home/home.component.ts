import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  category: any;
  product : any;

  constructor(private categoryService: CategoryService ,
              private productService : ProductService
  ) { }

  ngOnInit(): void {
    this.listCategory();
    this.productList();
  }

  onchange($event: string) {
    console.log('====>',$event)
  }
  listCategory(){
    this.categoryService.findAll().subscribe(data =>{
      this.category=data;
      console.log("======>",data)
    })
  }

  productList(){
    this.productService.findAll().subscribe(data =>{
      this.product=data;
      console.log("======>",data)
    })
  }
}
