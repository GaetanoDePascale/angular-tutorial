import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
  `,
  styleUrls: ['./dynamic.component.css'],
})
export class DynamicComponent implements OnInit {
  ads: AdItem[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
