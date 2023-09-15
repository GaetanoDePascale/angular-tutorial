import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DynamicComponent } from './dynamic.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';

@NgModule({
  imports: [BrowserModule],
  providers: [AdService],
  declarations: [
    DynamicComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
  ],
  bootstrap: [DynamicComponent],
})
export class DynamicModule {}
