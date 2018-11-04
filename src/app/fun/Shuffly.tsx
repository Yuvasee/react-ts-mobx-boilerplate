import * as React from 'react';

import { shuffle } from '../../helpers/string';
import { relative } from 'path';

interface Props extends React.HTMLProps<any> {
  text: string
}

export default class Shuffly extends React.Component<Props, any> {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
      textActive: this.props.text,
      timer: null,
      shiver: {}
    }
  }

  public handleMouseOver() {
    this.shiver();
    this.setState({
      timer: setInterval(() => this.shiver(), 200),      
    });
  }

  public handleMouseOut() {
    clearInterval(this.state.timer);    
    this.setState({
      textActive: this.state.text,
      timer: null,
      shiver: {}
    });
  }

  public shiver() {
    if (Math.random() > 0.15) {
      this.setState({
        shiver: {
          position: 'relative',
          top: Math.floor(Math.random() * 4) - 2,
          left: Math.floor(Math.random() * 4) - 2
        },
        textActive: shuffle(this.state.text)
      });
    }
  }

  public render() {    
    const { textActive, shiver } = this.state;

    return (
      <span
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)}
        style={shiver}
      >
        {textActive}
      </span>
    );
  }
}
