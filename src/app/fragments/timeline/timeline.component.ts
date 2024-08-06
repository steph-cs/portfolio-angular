import { Component, Input } from '@angular/core';
import { timelineModel } from 'src/app/model/timelineModel';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {
  @Input() timelineTitle: string = '';
  @Input() timelineId: string = '';
  @Input() timelineData: timelineModel[] = [];
}
