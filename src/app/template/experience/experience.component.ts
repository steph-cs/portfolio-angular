import { Component } from '@angular/core';
import { experience } from 'src/app/data/experienceData';
import { timelineModel } from 'src/app/model/formationModel';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
    experiences: timelineModel[]= experience
}
