import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/Product";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product = {};
  constructor(private productService : ProductService,private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.productService.findById(id).subscribe((data) => {
        console.log('-------  Z--->',data)
        this.product = data;
      })
    });
  }

}
