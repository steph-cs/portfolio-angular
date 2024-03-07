import { Component } from '@angular/core';
import { portfolio } from 'src/app/data/portfolioData';
import { portfolioModel } from 'src/app/model/portfolioModel';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
    portfolio: portfolioModel[] = portfolio

}
