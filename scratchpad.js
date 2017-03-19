function fibHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");
	
	n = parseInt(n);

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
	var fibTree = node.querySelector('div.fib');
	if (fibTree) {
		node.removeChild(fibTree);
	}
	
	var tree = fibHelper(n)
		node.appendChild(tree.html);
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
		clas = center.html.getAttribute("class");
		center.html.setAttribute("class", clas + " trib-center");

		var right = tribHelper(n - 3);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " trib-right");
		
		value = left.value + center.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'trib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(center.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}

var trib = function (n, node) {
	var tree = tribHelper(n)
		node.appendChild(tree.html);
}

var fibButton = function(me) {
	var form = me.parentNode;
	var slider = form.querySelector('input');
	var value = slider.value;
	fib(value, form.parentNode);
}

var fibSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Fib(' + me.value + ')';
}

// divMakerMaker() is a function which returns a function
// divMakerMaker() takes two arguments and creates a function which requires
// no arguments of its own, but upon invocation "remembers" the functions it
// // was created with
// var divMakerMaker = function(color, id) {
// 	return function() {
// 		var div = document.createElement('div');
// 		div.setAttribute('class', color + ' shadowed stuff-box');
// 		div.setAttribute('id', id);
// 		document.body.appendChild(div);
// 	}
// }

// var redDiv = divMakerMaker('red', 'fib');
// var blueDiv = divMakerMaker('blue', 'pell');
// var yellowDiv = divMakerMaker('yellow', 'trib');

// redDiv();
// blueDiv();
// yellowDiv();

// fib(5, document.querySelector('.red'));
// pell(5, document.querySelector('.blue'));
// trib(5, document.querySelector('.yellow'));
