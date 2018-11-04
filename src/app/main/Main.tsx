import * as React from 'react';
import { Link } from 'react-router-dom';

import './Main.scss';

interface Props {
  bgColor: string;
  text: string;
}

export default function Main(props: Props)  {
  const { bgColor, text } = props;

  return (
    <div className="main" style={{background: bgColor}}>
      {text}<br/>
      <Link to="/fun">fun!</Link>
    </div >
  );
};
