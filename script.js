function addBola() {
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");
	var p1 = Math.floor(Math.random() * 600);
	var p2 = Math.floor(Math.random() * 400);
	bola.setAttribute("style", "left:" + p1 + "px;top:" + p2 + "px;background:" + getRandomColor());
	bola.setAttribute("onclick", "estourar(this)")

	document.body.appendChild(bola);
}
function estourar(element) {
	document.body.removeChild(element);
}
function iniciar() {
	setInterval(addBola, 1000);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
