export function sendName() {
  return { type: 'SEND_NAME'}
}

export function inputSei(sei) {
  return { type: 'INPUT_SEI', sei}
}

export function inputMei(mei) {
  return { type: 'INPUT_MEI', mei}
}