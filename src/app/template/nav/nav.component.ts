import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    activeSection: string | null = null;

    constructor(private el: ElementRef) { }

    ngOnInit() { }

    @HostListener('window:scroll', [])
    onScroll(): void {
        this.highlightSectionInView();
    }

    private highlightSectionInView(): void {
        const sections = ['home', 'profile', 'portfolio', 'formation', 'experience', 'contact'];

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
        return rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
    }
}
