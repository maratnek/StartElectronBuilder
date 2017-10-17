import { Angular4cliPage } from './app.po';

describe('angular4cli App', () => {
  let page: Angular4cliPage;

  beforeEach(() => {
    page = new Angular4cliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
