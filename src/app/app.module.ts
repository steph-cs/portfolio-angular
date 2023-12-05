import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './template/nav/nav.component';
import { BannerComponent } from './template/banner/banner.component';
import { ProfileComponent } from './template/profile/profile.component';
import { PortfolioComponent } from './template/portfolio/portfolio.component';
import { TitleComponent } from './fragments/title/title.component';
import { CardComponent } from './fragments/card/card.component';
import { FormationComponent } from './template/formation/formation.component';
import { ExperienceComponent } from './template/experience/experience.component';
import { TimelineComponent } from './fragments/timeline/timeline.component';
import { ContactComponent } from './template/contact/contact.component';
import { FooterComponent } from './template/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    ProfileComponent,
    PortfolioComponent,
    TitleComponent,
    CardComponent,
    FormationComponent,
    ExperienceComponent,
    TimelineComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
