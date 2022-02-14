import React, { Component } from 'react';
import { AddOpt } from '../Styling/Button/AddOpt';
import { InputOp } from '../Styling/Input/Input';
import { AddOptionDiv } from '../Styling/Div/Divs';
import { Error } from '../Styling/Messages/Error';
export default class AddOption extends Component {
    constructor(props){
        super(props);
        this.AddOption = this.AddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    AddOption(e){
        e.preventDefault();
        const option = e.target.elements.opt.value.trim();
        const error = this.props.AddOption(option);
        this.setState(() => ({ error }));
    }
  render() {
    return <div>
    {this.state.error && <Error>{this.state.error}</Error>}
    <AddOptionDiv>
    <form onSubmit={this.AddOption}>
    <InputOp type="text" name="opt" placeholder="Add an Option" onFocus={(e) => e.target.placeholder = ""} 
    onBlur={(e) => e.target.placeholder = "Add an Option"}></InputOp>
    <AddOpt>Add Option</AddOpt>
    </form>
    </AddOptionDiv>  
    </div>;
  }
}
