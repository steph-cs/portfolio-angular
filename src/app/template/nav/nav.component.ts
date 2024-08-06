import { Component, HostListener, OnInit } from '@angular/core';
import { navbarData } from 'src/app/data/translate';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  activeSection: string = 'home';
  navbarSections: navbarData[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.navbarSections = this.languageService.getNavbarData(lang);
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.highlightSectionInView();
  }

  private highlightSectionInView(): void {
    const sections = this.navbarSections.map((item) => item.link);

    for (const section of sections) {
      const element = document.getElementById(section);

      if (element && this.isElementInViewport(element)) {
        this.activeSection = section;
        break;
      }
    }
  }

  private isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2
    );
  }
}
