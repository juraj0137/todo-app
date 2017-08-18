import { browser, by, element } from 'protractor';

export class AuroraForecastPwaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nl-root h1')).getText();
  }
}
