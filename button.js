let button = document.querySelector('#button');
let log = document.querySelector('#log');
button.addEventListener('mousedown', logMouseButton);

function logMouseButton(e) {
  if (typeof e === 'object') {
    switch (e.button) {
      case 0:
        log.textContent = '';
        break;
      case 1:
        log.textContent = '';
        break;
      case 2:
        log.textContent = '';
        break;
      default:
        log.textContent = ` ${e.button}`;
    }
  }
}
