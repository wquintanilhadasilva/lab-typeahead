import { LabTypeaheadPage } from './app.po';

describe('lab-typeahead App', () => {
  let page: LabTypeaheadPage;

  beforeEach(() => {
    page = new LabTypeaheadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
