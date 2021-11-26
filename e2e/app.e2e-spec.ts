import { Helloworld2Page } from './app.po';

describe('helloworld2 App', () => {
  let page: Helloworld2Page;

  beforeEach(() => {
    page = new Helloworld2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
