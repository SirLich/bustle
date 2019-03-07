import { Component, OnInit } from '@angular/core';
import { Activity} from '../activity';

@Component({
  selector: 'app-activity-display',
  templateUrl: './activity-display.component.html',
  styleUrls: ['./activity-display.component.css']
})
export class ActivityDisplayComponent implements OnInit {

  activity: Activity = {
    id: 1,
    title: 'Telephone Pictionary',
    description: 'To play, give each person a sheet of paper for every person they have in a group (so if 8 people, each person gets 8 ' +
      'sheets of paper). Next, have them write down some type of phrase on the top sheet of paper and then pass their entire stack to the ' +
      'person on their left. That person will read the phrase, move that sheet to back of the stack, and draw a picture representing that ' +
      'phrase on the next sheet of paper. They’ll then pass it to the person on their left, who will then look at the drawing, move that ' +
      'sheet to the back of the stack, and then write a sentence that describes that picture. This repeats until the stacks make it all ' +
      'the way around the circle.'
  };
  constructor() { }

  ngOnInit() {
  }

}
