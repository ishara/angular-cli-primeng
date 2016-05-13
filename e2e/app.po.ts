export class AngularCliPrimengPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-cli-primeng-app h1')).getText();
  }
}
