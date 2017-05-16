import { BCSGPage } from './app.po';

describe('bcsg App', () => {
  let page: BCSGPage;

  beforeEach(() => {
    page = new BCSGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
