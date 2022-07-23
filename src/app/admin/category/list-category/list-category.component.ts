import { Component, OnInit } from '@angular/core';
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  category: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.listCategory();
  }

  listCategory(){
    this.categoryService.findAll().subscribe(data =>{
      this.category=data;
      console.log("======>",data)
    })
  }
}
