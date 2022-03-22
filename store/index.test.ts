import { Store } from '.';
import { InternetConnectionStatus } from './enums';

describe('Store', () => {
  let store: Store;

  beforeEach(() => {
    store = new Store();
  });

  describe('theme', () => {
    it('should default to light theme', () => {
      expect(store.theme.current.name).toEqual(store.theme.light.name);
    });
    it('should change from light to dark theme', () => {
      store.toggleTheme();
      expect(store.theme.current.name).toEqual(store.theme.dark.name);
    });
    it('should change from dark to light theme', () => {
      store.toggleTheme();
      expect(store.theme.current.name).toEqual(store.theme.dark.name);
      store.toggleTheme();
      expect(store.theme.current.name).toEqual(store.theme.light.name);
    });
  });

  describe('internet connection status', () => {
    it('should default to online', () => {
      expect(store.internetConnectionStatus).toEqual(InternetConnectionStatus.online);
    });
    it('should set status to offline', () => {
      store.setInternetConnectionStatus(InternetConnectionStatus.offline);
      expect(store.internetConnectionStatus).toEqual(InternetConnectionStatus.offline);
    });
    it('should set status to online', () => {
      store.setInternetConnectionStatus(InternetConnectionStatus.online);
      expect(store.internetConnectionStatus).toEqual(InternetConnectionStatus.online);
    });
  });
});