import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return(
      <NameInputForm />
    )
  }
}

class NameInputForm extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      value1: "",
      value2: "",
      name: "",
    }

    this.changeText = this.changeText.bind(this)
    this.submitName = this.submitName.bind(this)
  }

  render() {

    let disabled = this.state.value1 && this.state.value2 ? false : true
    
    return (
      <div>
        <NameInput name="sei" label="姓" onChange={this.changeText} value={this.state.value1}/>
        <NameInput name="mei" label="名" onChange={this.changeText} value={this.state.value2}/>
        <SubmitButton disabled={disabled} onClick={this.submitName}/>
        {this.state.name ? <h1 display='none'>Hello, {this.state.name}</h1> : null}
      </div>
    )
  }

  changeText(e){
    if(e.target.className === "sei"){
      this.setState({
        value1: e.target.value
      })
    }else{
      this.setState({
        value2: e.target.value
      })
    }
  }

  submitName() {
    this.setState({
      name: this.state.value1 + " " + this.state.value2,
      value1: "",
      value2: "",
    })
    // postなどの処理
  }
}

class NameInput extends Component {

  static propTypes = {
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string,
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    name: null,
  }

  render() {
    return (
      <div>
        <span>{this.props.label}：</span>
        <input className={this.props.name} value={this.props.value} type="text" onChange={this.props.onChange} />
      </div>
    )
  }
}

class SubmitButton extends Component {

  static propTypes = {
    disabled: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>
        <input type="submit" disabled={this.props.disabled} onClick={this.props.onClick}/>
      </div>
    )
  }
}

export default App;
