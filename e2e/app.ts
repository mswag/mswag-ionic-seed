import { browser, element, by } from 'protractor';
import { BrowserHelper } from './browser_helper';

export class App {
  openBrowser() {
    return browser.get('');
  }

  isAppLoaded() {
    BrowserHelper.waitForElementToBeDisplayed('ion-nav');
    return element(by.css('ion-nav')).isPresent();
  }
}
