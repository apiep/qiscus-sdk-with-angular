import { QiscusSdkWithAngularPage } from './app.po';

describe('qiscus-sdk-with-angular App', () => {
  let page: QiscusSdkWithAngularPage;

  beforeEach(() => {
    page = new QiscusSdkWithAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
