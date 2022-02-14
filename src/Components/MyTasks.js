import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

export default class MyTasks extends Component {
    componentDidMount() {
        try {
          const json = localStorage.getItem('options');
          const options = JSON.parse(json);
    
          if (options) {
            this.setState(() => ({ options }));
          }
        } catch (e) {
          // Do nothing at all
        }
      }
      componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
          const json = JSON.stringify(this.state.options);
          localStorage.setItem('options', json);
        }
      }
    //DELETE OPTIONS:
    deleteOptions(){
        this.setState(()=>({ options: []}));
      
    }
    //PICK A TASK:
  
    pickTask(){
        const rnd  = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[rnd];
        alert(option);
       
        };
    
    //TAKE THE OPTION TEXT OF THE NEW OPTION ADD:
    AddOption(opt){
        if(!opt){
            return 'enter valid values';
        }
        else if(this.state.options.indexOf(opt) > -1){
            return 'already exists';
        }
        this.setState((prevState) => {
            return{
                options: prevState.options.concat([opt])
            };
        });
    }
    //DELETE ONE OPTION:
    deleteOption(optRemove){
        this.setState((prevState) => {
            return{
                options: prevState.options.filter(
                    (opt)=> {return optRemove !== opt}
                )
            };
        });
    }
    //WHAT SHOULD I DO BUTTON:
  
    //USING STATE:
    constructor(props){
        super(props);
        this.state = {
                options : ["oneone","twotwo","threethree","fourfour"],
        };
        this.deleteOptions = this.deleteOptions.bind(this);
        this.pickTask = this.pickTask.bind(this);
        this.AddOption = this.AddOption.bind(this);
        this.deleteOption = this.deleteOption.bind(this);
    }
  render() {
    return <div>
    <Header/>
    <Action optionsExist = {this.state.options.length > 0}  pickTask = {this.pickTask} />
    <Options options = {this.state.options} deleteOptions = {this.deleteOptions} deleteOption = {this.deleteOption}/>
    <AddOption AddOption = {this.AddOption}/>
    </div>;
  }
}
