import { LabPage } from './app.po';

describe('lab App', () => {
  let page: LabPage;

  beforeEach(() => {
    page = new LabPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
