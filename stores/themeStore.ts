import { makeAutoObservable, observable, action } from 'mobx';
import theme from '../styles/theme';
import { ColorTheme } from '../styles/types';

interface Theme {
  colors: any,
  light: ColorTheme,
  dark: ColorTheme,
  current: ColorTheme,
  global: any,
}

export class ThemeStore {
  theme: Theme = theme;

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