import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  ngOnInit(): void {
    this.type()
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
