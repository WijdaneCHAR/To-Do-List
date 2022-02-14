import React from 'react';
import { Remove } from '../Styling/Button/removeButton';
import { OptionDiv } from '../Styling/Div/Divs';
export default function Option(props) {
  return <div>
  <OptionDiv>
  {props.optionText}
  <Remove onClick={(e) => {
      props.deleteOption(props.optionText);
    }}>remove</Remove>
  </OptionDiv>
  </div>;
}