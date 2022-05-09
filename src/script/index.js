import {
  header,
  keyboard,
  textArea,
  hint
} from "./view";
import './../style/style.scss';

const body = document.querySelector('body');

header(body);
textArea(body);
keyboard(body);
hint(body);

let language = 'ru';
let content = document.querySelector('.textArea');
const keys = document.querySelectorAll('.keyboard__key');
const rusVariables = document.querySelectorAll('.ru');
const engVariables = document.querySelectorAll('.en');
const allVariables = document.querySelectorAll('.variables');

document.addEventListener('DOMContentLoaded', () => {
  language = window.localStorage.getItem('language')
  changeLanguage(rusVariables, engVariables, language)
})

window.addEventListener('unload', () => {
  window.localStorage.setItem('language', language)
})

import {
  keyKlickEffect,
  keyMouseDownEffect,
  keyUnactivator,
  changeLanguage,
  btnVariablesSwither
} from './keyCapEffects';

keys.forEach(elem => {
  elem.addEventListener('mousedown', function (event) {
    keyKlickEffect(elem, content);
    keyMouseDownEffect(elem);
    if (event.target.id == 'Shift' || event.target.outerText == 'Shift') {
      btnVariablesSwither(allVariables, 'upper');
    }
  })

  elem.addEventListener('mouseup', function (event) {
    keyUnactivator(elem);
    if (event.target.id == 'Shift' || event.target.outerText == 'Shift') {
      btnVariablesSwither(allVariables, 'lower');
    }
  })
})

document.addEventListener('keydown', function (event) {
  event.preventDefault();

  for (let i = 0; i < keys.length; i++) {
    if (keys[i].className.includes(event.code)) {
      keyKlickEffect(keys[i], content);
      keyMouseDownEffect(keys[i]);
    }
  }

  if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
    btnVariablesSwither(allVariables, 'upper');
  } else if (event.code == 'CapsLock') {
    btnVariablesSwither(allVariables, 'caps');
  }

  if ((event.key == 'Alt' && event.ctrlKey) || (event.key == 'Control' && event.altKey)) {
    language == 'ru' ? language = 'en' : language = 'ru';

    changeLanguage(rusVariables, engVariables, language);
  }

})

document.addEventListener('keyup', (event) => {
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].className.includes(event.code)) {
      keyUnactivator(keys[i]);
    }
  }

  if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
    btnVariablesSwither(allVariables, 'lower');
  }
})