import { Component } from '@angular/core';
import { formationDataModel } from 'src/app/model/formationModel';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
})
export class FormationComponent {
  formations!: formationDataModel;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.formations = this.languageService.getFormationData(lang);
    });
  }
}
