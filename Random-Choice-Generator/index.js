let btnRandomChoice = document.getElementById('btn-random-choice');
let btnResetChoice = document.getElementById('btn-reset-choice');
let interactionTextarea = document.getElementById('interaction-textarea');
let resultTextarea = document.getElementById('result-textarea');


const space = ' ';
const comma = ',';
const semicolon = ';';
const line = '\n';
let str = '';

btnRandomChoice.addEventListener("click", btnRandom);
btnResetChoice.addEventListener("click", btnReset);




function btnRandom() {

  str = interactionTextarea.value.split(returnOptionType());

  if (str != '') {
    let randomValue = randomInt(0, str.length);
    resultTextarea.value = str[randomValue];
    console.log(str);
  }

}

function btnReset() {
  resultTextarea.value = "";
  interactionTextarea.value = "";
}

function returnOptionType(){

  var e = document.getElementById("select-box");
  var strUser = e.options[e.selectedIndex].text;
  var optionType = option[strUser];

  return optionType;
}

function randomInt(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}




var option = {
    'on separete lines.': line,
    'separeted by commas.': comma,
    'separeted by semi-colons.': semicolon,
    'separeted a blank space': space,
};



