import { NgModule } from '@angular/core';
import { DynamicComponent } from './dynamic.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { HighlightDirective } from '../directive/highlight.directive';

@NgModule({
  declarations: [
    DynamicComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    HighlightDirective,
  ],
  bootstrap: [DynamicComponent],
})
export class DynamicModule {}
