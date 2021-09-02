import { Angular5AndDotNetCore5TemplatePage } from './app.po';

describe('Angular5AndDotNetCore5 App', function() {
  let page: Angular5AndDotNetCore5TemplatePage;

  beforeEach(() => {
    page = new Angular5AndDotNetCore5TemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
