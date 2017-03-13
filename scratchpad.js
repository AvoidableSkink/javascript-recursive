function fibHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");

	// leaf nodes aka. base case
	if (n < 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = fibHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");
		
		var right = fibHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");

		value = left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}
var fib = function (n, node) {
	var tree = fibHelper(n)
		node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	  node.setAttribute("id", "fib");
}

function pellHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "pell");

	// leaf nodes aka. base case
	if (n < 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'pell(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = pellHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " pell-left");
		
		var right = pellHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " pell-right");

		value = 2*left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'pell(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}

var pell = function (n, node) {
	var tree = pellHelper(n)
		node.appendChild(tree.html);
	  node.setAttribute("id", "pell");
}

//implement tribbonacci sequence
function tribHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "trib");

	// leaf nodes aka. base case
	if (n < 3) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 0;
		}
		else if (n === 2)
			{
				value = 1;
			}
		var p = document.createElement('p');
		p.textContent = 'trib(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = tribHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " trib-left");
		
		var center = tribHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " trib-center");

		var right = tribHelper(n - 3);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " trib-right");
		
		value = left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'trib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(center.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}

var pell = function (n, node) {
	var tree = tribHelper(n)
		node.appendChild(tree.html);
	  node.setAttribute("id", "trib");
}


var style = document.createElement('style');
style.textContent = 
"#fib {" +
"	display: inline-block;" +
"	width: 20000px;" +
"}" +
"" +
".fib {" +
"	background-color: rgba(0,0,255,0.1);" +
"}" +
"" +
".fib-left {" +
"	float: left;" +
"	display: inline-block;" +
"	margin-right: 4px;" +
"}" +
"" +
".fib-right {" +
"	float: right;" +
"	display: inline-block;" +
"	margin-left: 4px;" +
"}" +
"" +
"#pell {" +
"	display: inline-block;" +
"	width: 20000px;" +
"}" +
"" +
".pell {" +
"	background-color: rgba(0,0,255,0.1);" +
"}" +
"" +
".pell-left {" +
"	float: left;" +
"	display: inline-block;" +
"	margin-right: 4px;" +
"}" +
"" +
".pell-right {" +
"	float: right;" +
"	display: inline-block;" +
"	margin-left: 4px;" +
"}" +
"" +
"#trib {" +
"	display: inline-block;" +
"	width: 20000px;" +
"}" +
"" +
".trib {" +
"	background-color: rgba(0,0,255,0.1);" +
"}" +
"" +
".trib-left {" +
"	float: left;" +
"	display: inline-block;" +
"	margin-right: 4px;" +
"}" +
"" +
".trib-center {" +
"    float: center;" +
"	display: inline-block;" +
"	margin-right: 4px;" +
"}" +
"" +
".trib-right {" +
"	float: right;" +
"	display: inline-block;" +
"	margin-left: 4px;" +
"}" +
"" +
".shadowed {" +
"	text-shadow: 1px 1px 2px black;" +
"	color:       white;" +
"}" +
".stuff-box {" +
"	font-family: 'helvetica neue', helvetica, sans-serif;" +
"	letter-spacing: 1px;" +
"	text-transform: capitalize;" +
"	text-align: center;" +
"	padding: 3px 10px;" +
"	margin: 10px;" +
"	cursor: pointer;" +
"	border-radius: 10px;" +
"	border-width: 2px;" +
"	border-style: solid;" +
"}" +
"" +
".red {" +
"	border-color: rgb(255,0,0);" +
"	background:   rgb(180,60,60);" +
"	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" +
"}" +
"" +
".yellow {" +
"	border-color: rgb(255,255,0);" +
"	background:   rgb(180,180,60);" +
"	box-shadow: 1px 1px 2px rgba(200,200,0,0.4);" +
"}" +
"" +
".blue {" +
"	border-color: rgb(0,0,255);" +
"	background:   rgb(60,60,180);" +
"	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" +
"}" +
"" +
".green {" +
"	border-color: rgb(0,255,0);" +
"	background:   rgb(60,180,60);" +
"	box-shadow: 1px 1px 2px rgba(0,200,0,0.4);" +
"}";
document.querySelector('body').appendChild(style);


// divMakerMaker() is a function which returns a function
// divMakerMaker() takes two arguments and creates a function which requires
// no arguments of its own, but upon invocation "remembers" the functions it
// was created with
var divMakerMaker = function(color, id) {
	return function() {
		var div = document.createElement('div');
		div.setAttribute('class', color + ' shadowed stuff-box');
		div.setAttribute('id', id);
		document.body.appendChild(div);
	}
}

var redDiv = divMakerMaker('red', 'fib');
var blueDiv = divMakerMaker('blue', 'pell');
var yellowDiv = divMakerMaker('yellow', 'trib');

redDiv();
blueDiv();
yellowDiv();

fib(9, document.querySelector('.red'));
pell(9, document.querySelector('.blue'));
// trib(9, document.querySelector('.yellow'));
