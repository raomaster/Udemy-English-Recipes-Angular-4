import { UdemyEnglishPage } from './app.po';

describe('udemy-english App', () => {
  let page: UdemyEnglishPage;

  beforeEach(() => {
    page = new UdemyEnglishPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
