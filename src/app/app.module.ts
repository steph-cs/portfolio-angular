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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    ProfileComponent,
    PortfolioComponent,
    TitleComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
