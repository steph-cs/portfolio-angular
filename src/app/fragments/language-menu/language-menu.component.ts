import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Language, LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.css'],
})
export class LanguageMenuComponent {
  activeLanguage!: string;
  isOpen: boolean = false;
  languages;

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.activeLanguage = lang;
    });
    this.languages = this.languageService.getLanguages();
  }

  changeLanguage(e: Event) {
    const lang = (e.target as Element).id;

    this.activeLanguage = lang;
    this.languageService.setLanguage(lang as Language);
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  @ViewChild('menuContainer') menuContainer!: ElementRef;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (
      this.menuContainer &&
      !this.menuContainer.nativeElement.contains(event.target)
    ) {
      this.isOpen = false;
    }
  }
}
