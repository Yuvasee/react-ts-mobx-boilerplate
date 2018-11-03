import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { Stores } from '../../stores';
import Shuffly from './Shuffly';

import './Fun.scss';

interface Props extends React.HTMLProps<any> {
  stores?: Stores;
}

@inject('stores')
@observer
export default class Fun extends React.Component<Props, any> {
  constructor(props) {
    super(props);
  }

  public render() {    
    const { funText, color } = this.props.stores.appStore;

    const a = funText.split(/\s+/);

    console.log(a);
    

    return (
      <div className="fun" style={{background: color}}>
        {a.map((el, i) => (
          <span key={i}>
            {el.length > 1 ? <Shuffly text={el}/> : el}&#32;
          </span>
        ))}
      </div>
    );
  }
}
