import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-search',
  templateUrl: './activity-search.component.html',
  styleUrls: ['./activity-search.component.css']
})
export class ActivitySearchComponent implements OnInit {

  values = '';

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | '; }

  constructor() { }

  ngOnInit() {
  }

}
