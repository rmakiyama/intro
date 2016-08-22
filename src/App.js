import { connect } from 'react-redux'
import InputNameForm from './containers/InputNameForm'
import * as Actions from './actions'
import './App.css';

function mapStateToProps(state) {
  return {
    sei: state.sei,
    mei: state.mei,
    isDisabled: state.isDisabled,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(Actions.sendName()),
    inputSei: (sei) => dispatch(Actions.inputSei(sei)),
    inputMei: (mei) => dispatch(Actions.inputMei(mei))
  }
}

let App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputNameForm)

export default App;
