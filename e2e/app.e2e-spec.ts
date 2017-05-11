import { App } from './app';
import { browser } from 'protractor';
import { BrowserHelper } from './browser_helper';

beforeAll(() => {
  browser.ignoreSynchronization = true;
});

afterAll(() => {
  browser.manage().logs().get('browser')
  .then((browserLogs) => {
    // browserLogs is an array of objects with level and message fields
    browserLogs.forEach((log) => {
      console['log']('>>> ' + log.message);
    });
  });
});

describe('Login', () => {
  let app: App;

  beforeEach(() => {
    app = new App();
    app.openBrowser();
  });

  it('should load', () => {
    // demo of taking screenshots manually
    BrowserHelper.takeScreenshot('app');

    expect(app.isAppLoaded()).toBeTruthy();
  });
});
