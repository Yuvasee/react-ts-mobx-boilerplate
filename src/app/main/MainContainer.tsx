import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { Stores } from '../../stores';
import { shuffle } from '../../helpers/string';
import Main from './Main';

interface Props extends React.HTMLProps<any> {
  stores?: Stores;
}

@inject('stores')
@observer
export default class MainContainer extends React.Component<Props, any> {
  constructor(props) {
    super(props);

    this.state = {
      timer: null,
      text: 'Hello world!',
      counter: 1
    }
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(() => this.tick(), 500),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  tick() {
    const { counter } = this.state;
    const { setRandomColor } = this.props.stores.appStore;

    this.setState({
      counter: counter + 1
    });

    if (counter > 2) {
      this.setState({
        text: shuffle(this.state.text)
      });

      setRandomColor();
    }
  }

  public render() {        
    return (
      <Main
        bgColor={this.props.stores.appStore.color}
        text={this.state.text}
      />
    );
  }
}
