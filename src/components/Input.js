import React, { Component } from 'react';

export default class Input extends Component {

  static propTypes = {
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string,
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    name: null,
  }

  onChange(e){
    this.props.onChange(this.input.value.trim())
  }

  render() {
    return (
      <div>
        <span>{this.props.label}：</span>
        <input 
          className={this.props.name} 
          ref={(ref) => (this.input = ref)}
          type="text" 
          value={this.props.value}
          onChange={this.onChange.bind(this)} />
      </div>
    )
  }
}