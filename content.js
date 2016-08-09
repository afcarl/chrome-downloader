
var filename = document.getElementById('firstHeading').innerHTML.trim().toLowerCase().replace(/ /g, '_') + '.txt';
var element = document.createElement('a');
var text = document.getElementById('bodyContent').textContent.trim().replace(/[ \t]+\n/g, '\n').replace(/[ \t]+/g, ' ').replace(/\n+/g, '\n').replace(/\n[ \t]+/g, '\n');

element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
element.setAttribute('download', filename);
element.style.display = 'none';

document.body.appendChild(element);
element.click();
document.body.removeElement(element);

