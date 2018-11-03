import { action, observable } from 'mobx';

export default class AppStore {
  public stores: any;

  @observable public appState: boolean;

  constructor() {
    this.appState = true;

    this.toggleState = this.toggleState.bind(this);
  }

  @action
  public toggleState() {
    this.appState = !this.appState;
  }
}
