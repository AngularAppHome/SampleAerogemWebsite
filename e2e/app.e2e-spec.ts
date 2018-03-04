import { SampleAerogemWebsitePage } from './app.po';

describe('sample-aerogem-website App', () => {
  let page: SampleAerogemWebsitePage;

  beforeEach(() => {
    page = new SampleAerogemWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
