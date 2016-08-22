import React, { Component } from 'react';

export default class Button extends Component {

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