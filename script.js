var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rnd = document.querySelector(".rndColor");

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function createRndColor() {

	var c1string = Math.round(Math.random() * 16777216).toString(16);
	var c2string = Math.round(Math.random() * 16777216).toString(16);
	c1string = '#000000'.slice(0, -c1string.length) + c1string;
	c2string = '#000000'.slice(0, -c2string.length) + c2string;
	color1.value = c1string;
	color2.value = c2string;
	console.log(c1string);
	console.log(c2string);
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

rnd.addEventListener("click", createRndColor);