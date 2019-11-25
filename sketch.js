function setup() {
  let inp = createInput('');
  inp.input(myInputEvent);
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}