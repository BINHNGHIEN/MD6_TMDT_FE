import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  category: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.listCategory();
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
}
