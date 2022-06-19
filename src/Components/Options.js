import React from 'react';
import { RemoveAll } from '../Styling/Button/removeButton';
import Option from './Option';
import { NoOptions } from '../Styling/Messages/NoOptions';
import { OptionsDiv } from '../Styling/Div/Divs';
export default function Options(props) {
  return <div>
  <OptionsDiv>
  <RemoveAll onClick={props.deleteOptions}>Remove  All</RemoveAll>
        {props.options.length === 0 && <NoOptions> No tasks to show , Add ones </NoOptions>}
       <div>{
            props.options.map((option)=> <Option deleteOption={props.deleteOption} key={option} optionText={option}></Option> )
        }
        </div> 
  </OptionsDiv>
        </div>;
}
