import { StatusAppPage } from './app.po';

describe('status-app App', function() {
  let page: StatusAppPage;

  beforeEach(() => {
    page = new StatusAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
