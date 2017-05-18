import { SomeOfTheBestDealsPage } from './app.po';

describe('some-of-the-best-deals App', () => {
  let page: SomeOfTheBestDealsPage;

  beforeEach(() => {
    page = new SomeOfTheBestDealsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
