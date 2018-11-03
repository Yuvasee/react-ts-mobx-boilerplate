import { RouterStore } from 'mobx-react-router';

import AppStore from './app-store';

export class Stores {
  public router: RouterStore;
  public appStore: AppStore;s

  constructor() {
    this.router = new RouterStore();
    this.appStore = new AppStore();
  }
}

export default new Stores();
