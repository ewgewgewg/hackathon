const content = document.querySelector('svg');
content.parentNode.removeChild(content);

document.title = `${1} ${document.title}`;
localStorage.setItem('counter', '0');
let x = parseInt(localStorage.getItem('counter'));