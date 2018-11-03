import * as React from 'react';

import { shuffle } from '../../helpers/string';

interface Props extends React.HTMLProps<any> {
  text: string
}

export default class Shuffly extends React.Component<Props, any> {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
      textActive: this.props.text
    }
  }

  public over() {
    this.setState({
      textActive: shuffle(this.state.text)
    })
  }

  public out() {
    this.setState({
      textActive: this.state.text
    })
  }

  public render() {    
    const { text } = this.state;

    return (
      <span onMouseOver={this.over.bind(this)} onMouseOut={this.out.bind(this)}>
        {this.state.textActive}
      </span>
    );
  }
}
