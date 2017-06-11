import { NgTriplexPage } from './app.po';

describe('ng-triplex App', () => {
  let page: NgTriplexPage;

  beforeEach(() => {
    page = new NgTriplexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
