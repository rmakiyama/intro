import React, { Component } from 'react';
import Input from '../components/Input'
import Button from '../components/Button'

export default class InputNameForm extends Component {

  render() {

    const { sei, mei, isDisabled, inputSei, inputMei, onClick } = this.props

    return (
      <div>
        <Input name="sei" label="姓" onChange={inputSei} value={sei}/>
        <Input name="mei" label="名" onChange={inputMei} value={mei}/>
        <Button disabled={isDisabled} onClick={onClick}/>
      </div>
    )
  }
}