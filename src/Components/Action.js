import React from 'react';
import { Random } from '../Styling/Button/RandomButton';

function Action(props) {
  return <div>
  <Random onClick={ props.pickTask} disabled = {!props.optionsExist}>What Should I Do?</Random>
  </div>;
}

export default Action;
