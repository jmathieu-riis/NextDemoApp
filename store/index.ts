/** @module Store */
import { makeAutoObservable, observable, action } from 'mobx';
import { theme as myTheme } from '../styles';
import { Theme } from '../styles/interfaces';
import { InternetConnectionStatus } from './enums/internet-connection-status';

export class Store {
  internetConnectionStatus = InternetConnectionStatus.online;
  theme: Theme = myTheme;

  constructor() {
    makeAutoObservable(this, {
      internetConnectionStatus: observable,
      theme: observable,
      setInternetConnectionStatus: action,
      toggleTheme: action,
    });
  }

  setInternetConnectionStatus(status: InternetConnectionStatus) {
    this.internetConnectionStatus = status;
  }

  toggleTheme() {
    this.theme.current.name === 'light'
      ? this.theme = { ...this.theme, current: this.theme.dark }
      : this.theme = { ...this.theme, current: this.theme.light };
  }
}

const store = new Store();

export default store;
