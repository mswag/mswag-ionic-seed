import { browser, element, by } from 'protractor';
let EC = require('protractor').ExpectedConditions;

export class BrowserHelper {
  public static takeScreenshot(name = 'screenshot') {
    let fs = require('fs');
    browser.takeScreenshot().then(png => {
      let stream = fs.createWriteStream(
        'test-reports/e2e/screenshots/' + name + '.png'
      );
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  }

  public static waitForElementToBeDisplayed(cssSelector) {
    // TODO: use EC.visibilityOf?
    browser.wait(EC.presenceOf(element(by.css(cssSelector))), 10000);
  }
}
