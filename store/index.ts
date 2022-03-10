/** @module Store */
import { makeAutoObservable, observable, action } from 'mobx';
import { theme as myTheme } from '../styles';
import { Theme } from '../styles/interfaces';

export class Store {
  theme: Theme = myTheme;

  constructor() {
    makeAutoObservable(this, {
      theme: observable,
      toggleTheme: action,
    });
  }

  toggleTheme() {
    if (this.theme.current.name === 'light') {
      this.theme = { ...this.theme, current: this.theme.dark };
    } else {
      this.theme = { ...this.theme, current: this.theme.light };
    }
  }
}

const store = new Store();

export default store;
