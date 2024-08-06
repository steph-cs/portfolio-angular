import { Component } from '@angular/core';
import { portfolioDataModel } from 'src/app/model/portfolioModel';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  portfolioData!: portfolioDataModel;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.portfolioData = this.languageService.getPortfolioData(lang);
    });
  }
}
