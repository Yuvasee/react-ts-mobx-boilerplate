import { action, observable } from 'mobx';
import { Stores } from './';

export default class AppStore {
  public stores: Stores;

  @observable public color: string;

  constructor() {
    this.color = '#d3d3d3';

    this.setRandomColor = this.setRandomColor.bind(this);
  }

  @action
  public setRandomColor() {
    const r = () => Math.floor(Math.random() * (0xea - 0xba)) + 0xba;
    this.color = '#' + r().toString(16) + r().toString(16) + r().toString(16);
  }
}
