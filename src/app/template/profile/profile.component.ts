import { Component } from '@angular/core';
import { profileDataModel } from 'src/app/model/profileModel';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileData!: profileDataModel

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.profileData = this.languageService.getProfileData(lang);
    });
  }
}
