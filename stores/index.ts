import { makeAutoObservable, runInAction, reaction } from 'mobx';
import { ThemeStore } from './themeStore';

export class NextDemoAppStore {
  themeStore: ThemeStore;

  constructor() {
    makeAutoObservable(this);
    this.themeStore = new ThemeStore;
  }
};
