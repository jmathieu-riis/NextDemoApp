import { makeAutoObservable, observable, action } from 'mobx';
import { theme as myTheme } from '../styles/theme';
import { ColorTheme } from '../styles/types';

interface Theme {
  colors: any,
  light: ColorTheme,
  dark: ColorTheme,
  current: ColorTheme,
  global: any,
}

class Store {
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
