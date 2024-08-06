import { Component } from '@angular/core';
import { experienceDataModel } from 'src/app/model/experienceModel';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences!: experienceDataModel;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.experiences = this.languageService.getExperienceData(lang);
    });
  }
}
