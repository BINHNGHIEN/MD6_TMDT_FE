import { Component, OnInit } from '@angular/core';
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  status = 'Please fill in the form to create category';
  // @ts-ignore
  category: Category;
  form: any = {}
  error: any = {
    message: 'no_name_category'
  };
  success: any = {
    message: 'yes'
  };
  checkUploadAvatar = false;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  ngSubmit(){
    // @ts-ignore
    this.category = new Category(
      this.form.nameCategory,
      this.form.avatarCategory
    )
    console.log('this.category == ', this.category);
    this.categoryService.create(this.category).subscribe(data =>{
      console.log('data category = ',data);
      if(JSON.stringify(data)==JSON.stringify(this.error)){
        this.status = 'The name Category existed! Please try again!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status = 'Create success!'
      }
    })
  }
  // @ts-ignore
  onChangeAvatar($event) {
    console.log('goi ham nay khong');
    this.checkUploadAvatar = true;
    this.form.avatarCategory = $event;
    console.log('avatar category -->');
  }

}
