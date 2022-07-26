import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/Product";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  deleteSuccess: any = {
    message: "yes"
  }
  checkDelete = false;
  status = '';
  product: Product[]=[];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productList();
  }
  productList(){
    this.productService.findAll().subscribe(data =>{
      this.product=data;
      console.log("======>",data)
    })
  }


  deleteProduct(id: any) {
    this.productService.deleteById(id).subscribe(data =>{
      if(JSON.stringify(data)==JSON.stringify(this.deleteSuccess)){
        this.checkDelete = true;
        this.status = 'Delete success!';
      }
      this.productList();
    })
  }


}
