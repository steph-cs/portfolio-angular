import { Component } from '@angular/core';
import { formation } from 'src/app/data/formationData';
import { timelineModel } from 'src/app/model/formationModel';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {
    formations: timelineModel[] = formation

}
