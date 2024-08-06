import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { portfolioDataModel } from '../model/portfolioModel';
import { portfolioData } from '../data/portfolioData';
import { experienceData } from '../data/experienceData';
import { bannerData, navbarData } from '../data/translate';
import { profileData } from '../data/profileData';
import { formationDataModel } from '../model/formationModel';
import { formationData } from '../data/formationData';
import { experienceDataModel } from '../model/experienceModel';
import { profileDataModel } from '../model/profileModel';
import { contactData, contactDataModel } from '../data/contactData';

export type Language = 'EN' | 'PT';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<Language>('PT');
  currentLanguage$ = this.languageSubject.asObservable();

  setLanguage(lang: Language) {
    this.languageSubject.next(lang);
  }

  getLanguages() {
    const languages = [
      { sigla: 'PT', language: 'Português' },
      { sigla: 'EN', language: 'English' },
    ];
    return languages;
  }

  getProfileData(lang: Language): profileDataModel {
    return profileData[lang];
  }
  getPortfolioData(lang: Language): portfolioDataModel {
    return portfolioData[lang];
  }

  getFormationData(lang: Language): formationDataModel {
    return formationData[lang];
  }

  getExperienceData(lang: Language): experienceDataModel {
    return experienceData[lang];
  }

  getContactData(lang: Language): contactDataModel {
    return contactData[lang];
  }

  getNavbarData(lang: Language): navbarData[] {
    return navbarData[lang];
  }

  getBannerData(lang: Language): bannerData {
    return bannerData[lang];
  }
}
