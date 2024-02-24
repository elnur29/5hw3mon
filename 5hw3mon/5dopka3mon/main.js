

var colorInput = document.getElementById('color-input');
var square = document.getElementById('square');

colorInput.addEventListener('input', function() {
var color = colorInput.value;
square.style.backgroundColor = color;
});