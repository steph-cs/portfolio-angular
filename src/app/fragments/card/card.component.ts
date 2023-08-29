import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() active: boolean = false
    @Input() linkImage = ''
    @Input() title = ''
    @Input() description = ''
    @Input() tecnologies: string[] = []
    @Input() linkPage = ''
} 
