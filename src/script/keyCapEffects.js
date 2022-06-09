let cursorPosition = 0;

function cursorPos(area) {
  if (cursorPosition == -1) {
    cursorPosition = 0;
  }

  area.addEventListener('click', () => {
    cursorPosition = area.selectionStart
  })
}

export function btnVariablesSwither(collection, keyCode) {
  for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < collection[i].children.length; j++) {
      if (collection[i].children[j].className.includes(keyCode)) {
        collection[i].children[j].classList.remove('hidden');
      } else collection[i].children[j].classList.add('hidden')
    }
  }
}

export function changeLanguage(rusKeys, engKeys, language) {
  if (language == 'ru') {
    for (let i = 0; i < rusKeys.length; i++) {
      rusKeys[i].classList.remove('hidden');
      engKeys[i].classList.add('hidden');
    }
  } else if (language == 'en') {
    for (let i = 0; i < engKeys.length; i++) {
      rusKeys[i].classList.add('hidden');
      engKeys[i].classList.remove('hidden');
    }
  }
}

export function keyKlickEffect(key, content) {
  content.blur();
  cursorPos(content);
  let innerText = content.value.split('');
  if (
    !key.className.includes('Shift') &&
    !key.className.includes('Control') &&
    !key.className.includes('Alt') &&
    !key.className.includes('Backspace') &&
    !key.className.includes('Tab') &&
    !key.className.includes('Enter') &&
    !key.className.includes('Delete') &&
    !key.className.includes('MetaLeft') &&
    !key.className.includes('Caps')
  ) {
    innerText.splice(cursorPosition, 0, key.innerText);
    cursorPosition++;
  }

  if (key.className.includes('Backspace')) {
    if (cursorPosition == 0) {
      innerText.splice(cursorPosition, 0);
    } else innerText.splice(cursorPosition - 1, 1);
    cursorPosition--;
  } else if (key.className.includes('Del')) {
    if (cursorPosition == content.value.length) {
      innerText.splice(cursorPosition, 0);
    } else innerText.splice(cursorPosition, 1);
  } else if (key.className.includes('Tab')) {
    innerText.splice(cursorPosition, 0, '    ');
    cursorPosition += 4;
  } else if (key.className.includes('Space')) {
    innerText.splice(cursorPosition, 0, ' ');
  } else if (key.className.includes('Enter')) {
    innerText.splice(cursorPosition, 0, '\n');
    cursorPosition++;
  }

  content.value = innerText.join('');
}

export function keyMouseDownEffect(key) {
  if (key.className.includes('CapsLock')){
    key.classList.toggle('active')
  } else key.classList.add('active')
}

export function keyUnactivator(key) {
  key.classList.remove('active')
}