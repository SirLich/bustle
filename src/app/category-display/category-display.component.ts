import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../category';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.css']
})
export class CategoryDisplayComponent implements OnInit {

  selected: boolean;

  @Input() category: Category;

  constructor() { }

  ngOnInit() {
  }

}
