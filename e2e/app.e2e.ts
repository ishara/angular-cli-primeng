import { AngularCliPrimengPage } from './app.po';

describe('angular-cli-primeng App', function() {
  let page: AngularCliPrimengPage;

  beforeEach(() => {
    page = new AngularCliPrimengPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-cli-primeng works!');
  });
});
