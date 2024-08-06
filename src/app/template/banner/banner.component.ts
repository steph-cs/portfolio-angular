import { Component } from '@angular/core';
import { bannerData } from 'src/app/data/translate';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  bannerData!: bannerData;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.type();
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.bannerData = this.languageService.getBannerData(lang);
    });
  }

  type() {
    const magicElements = document.querySelectorAll('.typewriter-words');
    magicElements.forEach((element: any) => {
      element.classList.toggle('alternate');
    });
    setTimeout(() => {
      magicElements.forEach((element: any) => {
        element.classList.toggle('alternate');
      });
      setTimeout(() => {
        this.type();
      }, 6000);
    }, 6000);
  }
}
