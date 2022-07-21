import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/Product";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  productForm!: FormGroup;
  categories!: Category[];

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['Hello'],
      price: [1000000],
      category: this.fb.group({
        id: ['', Validators.required]
      })
    });
    this.categoryService.findAll().subscribe((response: Category[]) => {
      this.categories = response;
      console.log('categories', this.categories);

    }, error => console.log('Lỗi hệ thống ', error))

  }

  saveForm() {
    console.log('save form', this.productForm.value);
    if (this.productForm.valid) {
      this.productService.create(this.productForm.value).subscribe((response: Product) => {
        console.log(response);
      }, error => console.log('Lỗi hệ thống ', error));
    } else {
      alert('Các trường đánh dấu * bắt buộc nhập');
    }
  }
}
