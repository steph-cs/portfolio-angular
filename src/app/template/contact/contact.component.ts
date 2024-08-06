import { Component } from '@angular/core';
import { contactDataModel } from 'src/app/data/contactData';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactData!: contactDataModel;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.contactData = this.languageService.getContactData(lang);
    });
  }
}
