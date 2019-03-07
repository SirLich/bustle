import { Component, OnInit } from '@angular/core';
import { CATEGORIES} from '../mock-categories';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories = CATEGORIES;

  constructor() { }

  ngOnInit() {
  }

}
