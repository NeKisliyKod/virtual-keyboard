export function header(innerPath) {
  let heading = document.createElement('h1');
  heading.className = 'heading';
  heading.innerHTML = 'RSS Virtual keyboard';

  innerPath.prepend(heading);
}

export function textArea(innerPath) {
  let textArea = document.createElement('textArea');
  textArea.className = 'textArea';

  innerPath.append(textArea);
}


export function keyboard(innerPath) {
  let keyboard = document.createElement('div');
  keyboard.className = 'keyboard';

  let keys = [{
      ruKey: 'Ctrl',
      ruBigKey: 'Ctrl',
      ruCapsKey: 'Ctrl',
      ruShiftCapsKey: 'Ctrl',
      enKey: 'Ctrl',
      enBigKey: 'Ctrl',
      enCapsKey: 'Ctrl',
      enShiftCapsKey: 'Ctrl',
      class: 'keyboard__key ControlRight small dark',
      id: 'Ctrl'
    },
    {
      ruKey: '►',
      ruBigKey: '►',
      ruCapsKey: '►',
      ruShiftCapsKey: '►',
      enKey: '►',
      enBigKey: '►',
      enCapsKey: '►',
      enShiftCapsKey: '►',
      class: 'keyboard__key ArrowRight small dark',
      id: 'ArrowRight'
    },
    {
      ruKey: '▼',
      ruBigKey: '▼',
      ruCapsKey: '▼',
      ruShiftCapsKey: '▼',
      enKey: '▼',
      enBigKey: '▼',
      enCapsKey: '▼',
      enShiftCapsKey: '▼',
      class: 'keyboard__key ArrowDown small dark',
      id: 'ArrowDown'
    },
    {
      ruKey: '◄',
      ruBigKey: '◄',
      ruCapsKey: '◄',
      ruShiftCapsKey: '◄',
      enKey: '◄',
      enBigKey: '◄',
      enCapsKey: '◄',
      enShiftCapsKey: '◄',
      class: 'keyboard__key ArrowLeft small dark',
      id: 'ArrowLeft'
    },
    {
      ruKey: 'Alt',
      ruBigKey: 'Alt',
      ruCapsKey: 'Alt',
      ruShiftCapsKey: 'Alt',
      enKey: 'Alt',
      enBigKey: 'Alt',
      enCapsKey: 'Alt',
      enShiftCapsKey: 'Alt',
      class: 'keyboard__key AltRight small dark',
      id: 'Alt'
    },
    {
      ruKey: '',
      ruBigKey: '',
      ruCapsKey: '',
      ruShiftCapsKey: '',
      enKey: '',
      enBigKey: '',
      enCapsKey: '',
      enShiftCapsKey: '',
      class: 'keyboard__key Space extraLarge',
      id: 'Space'
    },
    {
      ruKey: 'Alt',
      ruBigKey: 'Alt',
      ruCapsKey: 'Alt',
      ruShiftCapsKey: 'Alt',
      enKey: 'Alt',
      enBigKey: 'Alt',
      enCapsKey: 'Alt',
      enShiftCapsKey: 'Alt',
      class: 'keyboard__key AltLeft small dark',
      id: 'Alt'
    },
    {
      ruKey: 'Win',
      ruBigKey: 'Win',
      ruCapsKey: 'Win',
      ruShiftCapsKey: 'Win',
      enKey: 'Win',
      enBigKey: 'Win',
      enCapsKey: 'Win',
      enShiftCapsKey: 'Win',
      class: 'keyboard__key MetaLeft small dark',
      id: 'Win'
    },
    {
      ruKey: 'Ctrl',
      ruBigKey: 'Ctrl',
      ruCapsKey: 'Ctrl',
      ruShiftCapsKey: 'Ctrl',
      enKey: 'Ctrl',
      enBigKey: 'Ctrl',
      enCapsKey: 'Ctrl',
      enShiftCapsKey: 'Ctrl',
      class: 'keyboard__key ControlLeft small dark',
      id: 'Ctrl'
    },
    {
      ruKey: 'Shift',
      ruBigKey: 'Shift',
      ruCapsKey: 'Shift',
      ruShiftCapsKey: 'Shift',
      enKey: 'Shift',
      enBigKey: 'Shift',
      enCapsKey: 'Shift',
      enShiftCapsKey: 'Shift',
      class: 'keyboard__key ShiftRight preLarge dark',
      id: 'Shift'
    },
    {
      ruKey: '▲',
      ruBigKey: '▲',
      ruCapsKey: '▲',
      ruShiftCapsKey: '▲',
      enKey: '▲',
      enBigKey: '▲',
      enCapsKey: '▲',
      enShiftCapsKey: '▲',
      class: 'keyboard__key ArrowUp small dark',
      id: 'ArrowUp'
    },
    {
      ruKey: '.',
      ruBigKey: ',',
      ruCapsKey: '.',
      ruShiftCapsKey: ',',
      enKey: '/',
      enBigKey: '?',
      enCapsKey: '/',
      enShiftCapsKey: '?',
      class: 'keyboard__key Slash small',
      id: 'Slash'
    },
    {
      ruKey: 'ю',
      ruBigKey: 'Ю',
      ruCapsKey: 'Ю',
      ruShiftCapsKey: 'ю',
      enKey: '.',
      enBigKey: '>',
      enCapsKey: '.',
      enShiftCapsKey: '>',
      class: 'keyboard__key Period small',
      id: 'Period'
    },
    {
      ruKey: 'б',
      ruBigKey: 'Б',
      ruCapsKey: 'Б',
      ruShiftCapsKey: 'б',
      enKey: ',',
      enBigKey: '<',
      enCapsKey: ',',
      enShiftCapsKey: '<',
      class: 'keyboard__key Comma small',
      id: 'Comma'
    },
    {
      ruKey: 'ь',
      ruBigKey: 'Ь',
      ruCapsKey: 'Ь',
      ruShiftCapsKey: 'ь',
      enKey: 'm',
      enBigKey: 'M',
      enCapsKey: 'M',
      enShiftCapsKey: 'm',
      class: 'keyboard__key KeyM small',
      id: 'KeyM'
    },
    {
      ruKey: 'т',
      ruBigKey: 'Т',
      ruCapsKey: 'Т',
      ruShiftCapsKey: 'т',
      enKey: 'n',
      enBigKey: 'N',
      enCapsKey: 'N',
      enShiftCapsKey: 'n',
      class: 'keyboard__key KeyN small',
      id: 'KeyN'
    },
    {
      ruKey: 'и',
      ruBigKey: 'И',
      ruCapsKey: 'И',
      ruShiftCapsKey: 'и',
      enKey: 'b',
      enBigKey: 'B',
      enCapsKey: 'B',
      enShiftCapsKey: 'b',
      class: 'keyboard__key KeyB small',
      id: 'KeyB'
    },
    {
      ruKey: 'м',
      ruBigKey: 'М',
      ruCapsKey: 'М',
      ruShiftCapsKey: 'м',
      enKey: 'v',
      enBigKey: 'V',
      enCapsKey: 'V',
      enShiftCapsKey: 'v',
      class: 'keyboard__key KeyV small',
      id: 'KeyV'
    },
    {
      ruKey: 'с',
      ruBigKey: 'С',
      ruCapsKey: 'С',
      ruShiftCapsKey: 'с',
      enKey: 'c',
      enBigKey: 'C',
      enCapsKey: 'C',
      enShiftCapsKey: 'c',
      class: 'keyboard__key KeyC small',
      id: 'KeyC'
    },
    {
      ruKey: 'ч',
      ruBigKey: 'Ч',
      ruCapsKey: 'Ч',
      ruShiftCapsKey: 'ч',
      enKey: 'x',
      enBigKey: 'X',
      enCapsKey: 'X',
      enShiftCapsKey: 'x',
      class: 'keyboard__key KeyX small',
      id: 'KeyX'
    },
    {
      ruKey: 'я',
      ruBigKey: 'Я',
      ruCapsKey: 'Я',
      ruShiftCapsKey: 'я',
      enKey: 'z',
      enBigKey: 'Z',
      enCapsKey: 'Z',
      enShiftCapsKey: 'z',
      class: 'keyboard__key KeyZ small',
      id: 'KeyZ'
    },
    {
      ruKey: 'Shift',
      ruBigKey: 'Shift',
      ruCapsKey: 'Shift',
      ruShiftCapsKey: 'Shift',
      enKey: 'Shift',
      enBigKey: 'Shift',
      enCapsKey: 'Shift',
      enShiftCapsKey: 'Shift',
      class: 'keyboard__key ShiftLeft large dark',
      id: 'Shift'
    },
    {
      ruKey: 'Enter',
      ruBigKey: 'Enter',
      ruCapsKey: 'Enter',
      ruShiftCapsKey: 'Enter',
      enKey: 'Enter',
      enBigKey: 'Enter',
      enCapsKey: 'Enter',
      enShiftCapsKey: 'Enter',
      class: 'keyboard__key Enter preLarge dark',
      id: 'Enter'
    },
    {
      ruKey: 'э',
      ruBigKey: 'Э',
      ruCapsKey: 'Э',
      ruShiftCapsKey: 'э',
      enKey: '\'',
      enBigKey: '\"',
      enCapsKey: '\'',
      enShiftCapsKey: '\"',
      class: 'keyboard__key Quote small',
      id: 'Quote'
    },
    {
      ruKey: 'ж',
      ruBigKey: 'Ж',
      ruCapsKey: 'Ж',
      ruShiftCapsKey: 'ж',
      enKey: ';',
      enBigKey: ':',
      enCapsKey: ';',
      enShiftCapsKey: ':',
      class: 'keyboard__key Semicolon small',
      id: 'Semicolon'
    },
    {
      ruKey: 'д',
      ruBigKey: 'Д',
      ruCapsKey: 'Д',
      ruShiftCapsKey: 'д',
      enKey: 'l',
      enBigKey: 'L',
      enCapsKey: 'L',
      enShiftCapsKey: 'l',
      class: 'keyboard__key KeyL small',
      id: 'KeyL'
    },
    {
      ruKey: 'л',
      ruBigKey: 'Л',
      ruCapsKey: 'Л',
      ruShiftCapsKey: 'л',
      enKey: 'k',
      enBigKey: 'K',
      enCapsKey: 'K',
      enShiftCapsKey: 'k',
      class: 'keyboard__key KeyK small',
      id: 'KeyK'
    },
    {
      ruKey: 'о',
      ruBigKey: 'О',
      ruCapsKey: 'О',
      ruShiftCapsKey: 'о',
      enKey: 'j',
      enBigKey: 'J',
      enCapsKey: 'J',
      enShiftCapsKey: 'j',
      class: 'keyboard__key KeyJ small',
      id: 'KeyJ'
    },
    {
      ruKey: 'р',
      ruBigKey: 'Р',
      ruCapsKey: 'Р',
      ruShiftCapsKey: 'р',
      enKey: 'h',
      enBigKey: 'H',
      enCapsKey: 'H',
      enShiftCapsKey: 'h',
      class: 'keyboard__key KeyH small',
      id: 'KeyH'
    },
    {
      ruKey: 'п',
      ruBigKey: 'П',
      ruCapsKey: 'П',
      ruShiftCapsKey: 'п',
      enKey: 'g',
      enBigKey: 'G',
      enCapsKey: 'G',
      enShiftCapsKey: 'g',
      class: 'keyboard__key KeyG small',
      id: 'KeyG'
    },
    {
      ruKey: 'а',
      ruBigKey: 'А',
      ruCapsKey: 'А',
      ruShiftCapsKey: 'а',
      enKey: 'f',
      enBigKey: 'F',
      enCapsKey: 'F',
      enShiftCapsKey: 'f',
      class: 'keyboard__key KeyF small',
      id: 'KeyF'
    },
    {
      ruKey: 'в',
      ruBigKey: 'В',
      ruCapsKey: 'В',
      ruShiftCapsKey: 'в',
      enKey: 'd',
      enBigKey: 'D',
      enCapsKey: 'D',
      enShiftCapsKey: 'd',
      class: 'keyboard__key KeyD small',
      id: 'KeyD'
    },
    {
      ruKey: 'ы',
      ruBigKey: 'Ы',
      ruCapsKey: 'Ы',
      ruShiftCapsKey: 'ы',
      enKey: 's',
      enBigKey: 'S',
      enCapsKey: 'S',
      enShiftCapsKey: 's',
      class: 'keyboard__key KeyS small',
      id: 'KeyS'
    },
    {
      ruKey: 'ф',
      ruBigKey: 'Ф',
      ruCapsKey: 'Ф',
      ruShiftCapsKey: 'ф',
      enKey: 'a',
      enBigKey: 'A',
      enCapsKey: 'A',
      enShiftCapsKey: 'a',
      class: 'keyboard__key KeyA small',
      id: 'KeyA'
    },
    {
      ruKey: 'CapsLock',
      ruBigKey: 'CapsLock',
      ruCapsKey: 'CapsLock',
      ruShiftCapsKey: 'CapsLock',
      enKey: 'CapsLock',
      enBigKey: 'CapsLock',
      enCapsKey: 'CapsLock',
      enShiftCapsKey: 'CapsLock',
      class: 'keyboard__key CapsLock large dark',
      id: 'CapsLock'
    },
    {
      ruKey: 'Del',
      ruBigKey: 'Del',
      ruCapsKey: 'Del',
      ruShiftCapsKey: 'Del',
      enKey: 'Del',
      enBigKey: 'Del',
      enCapsKey: 'Del',
      enShiftCapsKey: 'Del',
      class: 'keyboard__key Delete small dark',
      id: 'Delete'
    },
    {
      ruKey: '\\',
      ruBigKey: '/',
      ruCapsKey: '\\',
      ruShiftCapsKey: '/',
      enKey: '\\',
      enBigKey: '|',
      enCapsKey: '\\',
      enShiftCapsKey: '|',
      class: 'keyboard__key Backslash small',
      id: 'Backslash'
    },
    {
      ruKey: 'ъ',
      ruBigKey: 'Ъ',
      ruCapsKey: 'Ъ',
      ruShiftCapsKey: 'ъ',
      enKey: ']',
      enBigKey: '}',
      enCapsKey: ']',
      enShiftCapsKey: '}',
      class: 'keyboard__key BracketRight small',
      id: 'BracketRight'
    },
    {
      ruKey: 'х',
      ruBigKey: 'Х',
      ruCapsKey: 'Х',
      ruShiftCapsKey: 'х',
      enKey: '[',
      enBigKey: '{',
      enCapsKey: '[',
      enShiftCapsKey: '{',
      class: 'keyboard__key BracketLeft small',
      id: 'BracketLeft'
    },
    {
      ruKey: 'з',
      ruBigKey: 'З',
      ruCapsKey: 'З',
      ruShiftCapsKey: 'з',
      enKey: 'p',
      enBigKey: 'P',
      enCapsKey: 'P',
      enShiftCapsKey: 'p',
      class: 'keyboard__key KeyP small',
      id: 'KeyP'
    },
    {
      ruKey: 'щ',
      ruBigKey: 'Щ',
      ruCapsKey: 'Щ',
      ruShiftCapsKey: 'щ',
      enKey: 'o',
      enBigKey: 'O',
      enCapsKey: 'O',
      enShiftCapsKey: 'o',
      class: 'keyboard__key KeyO small',
      id: 'KeyO'
    },
    {
      ruKey: 'ш',
      ruBigKey: 'Ш',
      ruCapsKey: 'Ш',
      ruShiftCapsKey: 'ш',
      enKey: 'i',
      enBigKey: 'I',
      enCapsKey: 'I',
      enShiftCapsKey: 'i',
      class: 'keyboard__key KeyI small',
      id: 'KeyI'
    },
    {
      ruKey: 'г',
      ruBigKey: 'Г',
      ruCapsKey: 'Г',
      ruShiftCapsKey: 'г',
      enKey: 'u',
      enBigKey: 'U',
      enCapsKey: 'U',
      enShiftCapsKey: 'u',
      class: 'keyboard__key KeyU small',
      id: 'KeyU'
    },
    {
      ruKey: 'н',
      ruBigKey: 'Н',
      ruCapsKey: 'Н',
      ruShiftCapsKey: 'н',
      enKey: 'y',
      enBigKey: 'Y',
      enCapsKey: 'Y',
      enShiftCapsKey: 'y',
      class: 'keyboard__key KeyY small',
      id: 'KeyY'
    },
    {
      ruKey: 'е',
      ruBigKey: 'Е',
      ruCapsKey: 'Е',
      ruShiftCapsKey: 'е',
      enKey: 't',
      enBigKey: 'T',
      enCapsKey: 'T',
      enShiftCapsKey: 't',
      class: 'keyboard__key KeyT small',
      id: 'KeyT'
    },
    {
      ruKey: 'к',
      ruBigKey: 'К',
      ruCapsKey: 'К',
      ruShiftCapsKey: 'к',
      enKey: 'r',
      enBigKey: 'R',
      enCapsKey: 'R',
      enShiftCapsKey: 'r',
      class: 'keyboard__key KeyR small',
      id: 'KeyR'
    },
    {
      ruKey: 'у',
      ruBigKey: 'У',
      ruCapsKey: 'У',
      ruShiftCapsKey: 'у',
      enKey: 'e',
      enBigKey: 'E',
      enCapsKey: 'E',
      enShiftCapsKey: 'e',
      class: 'keyboard__key KeyE small',
      id: 'KeyE'
    },
    {
      ruKey: 'ц',
      ruBigKey: 'Ц',
      ruCapsKey: 'Ц',
      ruShiftCapsKey: 'ц',
      enKey: 'w',
      enBigKey: 'W',
      enCapsKey: 'W',
      enShiftCapsKey: 'w',
      class: 'keyboard__key KeyW small',
      id: 'KeyW'
    },
    {
      ruKey: 'й',
      ruBigKey: 'Й',
      ruCapsKey: 'Й',
      ruShiftCapsKey: 'й',
      enKey: 'q',
      enBigKey: 'Q',
      enCapsKey: 'Q',
      enShiftCapsKey: 'q',
      class: 'keyboard__key KeyQ small',
      id: 'KeyQ'
    },
    {
      ruKey: 'Tab',
      ruBigKey: 'Tab',
      ruCapsKey: 'Tab',
      ruShiftCapsKey: 'Tab',
      enKey: 'Tab',
      enBigKey: 'Tab',
      enCapsKey: 'Tab',
      enShiftCapsKey: 'Tab',
      class: 'keyboard__key Tab midle dark',
      id: 'Tab'
    },
    {
      ruKey: 'Backspace',
      ruBigKey: 'Backspace',
      ruCapsKey: 'Backspace',
      ruShiftCapsKey: 'Backspace',
      enKey: 'Backspace',
      enBigKey: 'Backspace',
      enCapsKey: 'Backspace',
      enShiftCapsKey: 'Backspace',
      class: 'keyboard__key Backspace large dark',
      id: 'Backspace'
    },
    {
      ruKey: '=',
      ruBigKey: '+',
      ruCapsKey: '=',
      ruShiftCapsKey: '+',
      enKey: '=',
      enBigKey: '+',
      enCapsKey: '=',
      enShiftCapsKey: '+',
      class: 'keyboard__key Equal small',
      id: 'Equal'
    },
    {
      ruKey: '-',
      ruBigKey: '_',
      ruCapsKey: '-',
      ruShiftCapsKey: '_',
      enKey: '-',
      enBigKey: '_',
      enCapsKey: '-',
      enShiftCapsKey: '_',
      class: 'keyboard__key Minus small',
      id: 'Minus'
    },
    {
      ruKey: '0',
      ruBigKey: ')',
      ruCapsKey: '0',
      ruShiftCapsKey: ')',
      enKey: '0',
      enBigKey: ')',
      enCapsKey: '0',
      enShiftCapsKey: ')',
      class: 'keyboard__key Digit0 small',
      id: '0'
    },
    {
      ruKey: '9',
      ruBigKey: '(',
      ruCapsKey: '9',
      ruShiftCapsKey: '(',
      enKey: '9',
      enBigKey: '(',
      enCapsKey: '9',
      enShiftCapsKey: '(',
      class: 'keyboard__key Digit9 small',
      id: '9'
    },
    {
      ruKey: '8',
      ruBigKey: '*',
      ruCapsKey: '8',
      ruShiftCapsKey: '*',
      enKey: '8',
      enBigKey: '*',
      enCapsKey: '8',
      enShiftCapsKey: '*',
      class: 'keyboard__key Digit8 small',
      id: '8'
    },
    {
      ruKey: '7',
      ruBigKey: '?',
      ruCapsKey: '7',
      ruShiftCapsKey: '?',
      enKey: '7',
      enBigKey: '&',
      enCapsKey: '7',
      enShiftCapsKey: '&',
      class: 'keyboard__key Digit7 small',
      id: '7'
    },
    {
      ruKey: '6',
      ruBigKey: ':',
      ruCapsKey: '6',
      ruShiftCapsKey: ':',
      enKey: '6',
      enBigKey: '^',
      enCapsKey: '6',
      enShiftCapsKey: '^',
      class: 'keyboard__key Digit6 small',
      id: '6'
    },
    {
      ruKey: '5',
      ruBigKey: '%',
      ruCapsKey: '5',
      ruShiftCapsKey: '%',
      enKey: '5',
      enBigKey: '%',
      enCapsKey: '5',
      enShiftCapsKey: '%',
      class: 'keyboard__key Digit5 small',
      id: '5'
    },
    {
      ruKey: '4',
      ruBigKey: ';',
      ruCapsKey: '4',
      ruShiftCapsKey: ';',
      enKey: '4',
      enBigKey: '$',
      enCapsKey: '4',
      enShiftCapsKey: '$',
      class: 'keyboard__key Digit4 small',
      id: '4'
    },
    {
      ruKey: '3',
      ruBigKey: '№',
      ruCapsKey: '3',
      ruShiftCapsKey: '№',
      enKey: '3',
      enBigKey: '#',
      enCapsKey: '3',
      enShiftCapsKey: '#',
      class: 'keyboard__key Digit3 small',
      id: '3'
    },
    {
      ruKey: '2',
      ruBigKey: '"',
      ruCapsKey: '2',
      ruShiftCapsKey: '"',
      enKey: '2',
      enBigKey: '@',
      enCapsKey: '2',
      enShiftCapsKey: '@',
      class: 'keyboard__key Digit2 small',
      id: '2'
    },
    {
      ruKey: '1',
      ruBigKey: '!',
      ruCapsKey: '1',
      ruShiftCapsKey: '!',
      enKey: '1',
      enBigKey: '!',
      enCapsKey: '1',
      enShiftCapsKey: '!',
      class: 'keyboard__key Digit1 small',
      id: '1'
    },
    {
      ruKey: 'ё',
      ruBigKey: 'Ё',
      ruCapsKey: 'Ё',
      ruShiftCapsKey: 'ё',
      enKey: '`',
      enBigKey: '~',
      enCapsKey: '`',
      enShiftCapsKey: '~',
      class: 'keyboard__key Backquote small',
      id: 'q'
    },
  ];

  keys.forEach((elem) => {
    let keyCap = document.createElement('div');
    keyCap.className = elem.class;
    keyCap.innerHTML = `
      <span class="ru variables">
        <span class="lower">${elem.ruKey}</span>
        <span class="upper hidden">${elem.ruBigKey}</span>
        <span class="caps hidden">${elem.ruCapsKey}</span>
        <span class="shiftCaps hidden">${elem.ruShiftCapsKey}</span>
      </span>
      <span class="en variables hidden">
        <span class="lower">${elem.enKey}</span>
        <span class="upper hidden">${elem.enBigKey}</span>
        <span class="caps hidden">${elem.enCapsKey}</span>
        <span class="shiftCaps hidden">${elem.enShiftCapsKey}</span>
      </span>
    `;
    keyCap.id = elem.id;

    keyboard.prepend(keyCap);
  })

  innerPath.append(keyboard);
}

export function hint(innerPath) {
  let hint = document.createElement('p');
  hint.className = 'hint';
  hint.innerHTML = `Клавиатура создана в операционной системе Windows <br>
  Для переключения языка комбинация: левыe ctrl + alt`;

  innerPath.append(hint);
}