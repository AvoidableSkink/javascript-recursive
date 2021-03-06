function fibHelper(n) {
	n = parseInt(n);
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
	var fibTree = node.querySelector('div.fib');
	if (fibTree) {
		node.removeChild(fibTree);
	}
	
	var tree = fibHelper(n)
		node.appendChild(tree.html);
}

function pellHelper(n) {
	n = parseInt(n);
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
	var pellTree = node.querySelector('div.pell');
	if (pellTree) {
		node.removeChild(pellTree);
	}
	
	var tree = pellHelper(n)
		node.appendChild(tree.html);
		node.setAttribute("id", "pell");
}

//implement tribbonacci sequence
function tribHelper(n) {
	n = parseInt(n);
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
	var tribTree = node.querySelector('div.trib');
	if (tribTree) {
		node.removeChild(tribTree);
	}
	
	var tree = tribHelper(n)
		node.appendChild(tree.html);
}

var fibButton = function(me) {
	var form = me.parentNode;
	var slider = form.querySelector('input');
	var value = slider.value;
	if(me.id === "fib")
	{
		fib(value, form.parentNode);
	}
	if(me.id === "pell")
	{
		pell(value, form.parentNode);
	}
	if(me.id === "trib")
	{
		trib(value, form.parentNode);
	}
}

var fibSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	if(me.id === "fib")
	{
		button.textContent = 'Fib(' + me.value + ')';
	}
	if(me.id === "pell")
	{
		button.textContent = 'Pell(' + me.value + ')';
	}
	if(me.id === "trib")
	{
		button.textContent = 'Trib(' + me.value + ')';
	}
}
