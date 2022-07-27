import {Component, OnInit} from '@angular/core';
import {Product} from "../../../model/Product";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../service/token.service";
import {CartElement} from "../../../model/cart-element";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLogin = false;
  searchForm = new FormGroup({
      name: new FormControl('')
    }
  );
  list: any;
  deleteSuccess: any = {
    message: "yes"
  }
  checkDelete = false;
  status = '';
  product: Product[] = [];

  constructor(private productService: ProductService,
              private tokenService: TokenService,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.productList();
    if (this.tokenService.getTokenKey()) {
      // this.avatar = this.tokenService.getAvatarKey();
      this.isLogin = true;
      console.log('   ====> ');
    }
  }

  productList() {
    this.productService.findAll().subscribe(data => {
      this.list = data;
      console.log("======>", data)
    })
  }

  search() {
    this.productService.searchName(this.searchForm.value.name).subscribe((data) => {
      // @ts-ignore
      this.list = data;
      console.log(data)
    })
  }

  deleteProduct(id: any) {
    this.productService.deleteById(id).subscribe(data => {
      if (JSON.stringify(data) == JSON.stringify(this.deleteSuccess)) {
        this.checkDelete = true;
        this.status = 'Delete success!';
      }
      this.productList();
    })
  }

  addToCart(productId: number) {
    const cart: CartElement = {
      product: {id: productId},
      quantity: 1
    };
    this.productService.addToCart(cart).subscribe((data: CartElement) => {
      console.log(data);
      // Viết code router chuyển vào trang giỏ hàng
    })
  }
}
