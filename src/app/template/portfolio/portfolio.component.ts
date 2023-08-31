import { Component } from '@angular/core';
import { portfolio } from 'src/app/data/portfolioData';
import { cardCarouselModel } from 'src/app/model/cardCarouselModel';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
    portfolio: cardCarouselModel[] = portfolio

    activeCard: number = 1
    carousel: cardCarouselModel[] = []

    constructor() {
        this.carouselInit()
        setInterval(() => {
            this.nextSlide(); 
            }, 10000);
    }

    carouselInit() {
        this.carousel = this.carousel.concat(this.portfolio.slice(0, 3))
    }

    nextSlide() {
        this.activeCard = (this.activeCard + 1) % this.portfolio.length;

        this.carousel.shift()
        this.carousel.push(this.portfolio[(this.activeCard + 1) % this.portfolio.length])
    }

    prevSlide() {
        this.activeCard = (this.activeCard - (this.activeCard == 0? - (this.portfolio.length -1) : 1)) % this.portfolio.length

        this.carousel.pop()
        this.carousel.unshift(this.portfolio[(this.activeCard - (this.activeCard == 0? - (this.portfolio.length -1) : 1)) % this.portfolio.length])
    }
}
