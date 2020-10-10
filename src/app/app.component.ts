import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export const timeForRender = 30;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isNavOpened = false;
  translateService: TranslateService;
  isRuTranslateOn: boolean;

  constructor(translate: TranslateService) {
    this.translateService = translate;
    this.translateService.setDefaultLang('ru');
    this.translateService.use('ru');
    this.isRuTranslateOn = true;
  }

  navTo(anchor: string) {
    this.isNavOpened = false;
    setTimeout(() => {
      location.href = anchor;
    }, timeForRender);
  }

  setLocale(lang: string) {
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.isRuTranslateOn = lang === 'ru';
  }
}
