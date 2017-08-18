import { AuroraForecastPwaPage } from './app.po';

describe('aurora-forecast-pwa App', () => {
  let page: AuroraForecastPwaPage;

  beforeEach(() => {
    page = new AuroraForecastPwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('nl works!');
  });
});
