var solveFor;
var result = 0;

function ratioCalc(){
	var inputValA = document.getElementById("TextInputA").value;
    var inputValB = document.getElementById("TextInputB").value;
    var inputValC = document.getElementById("TextInputC").value;
	var a = parseInt(inputValA);
    var b = parseInt(inputValB);
    var c = parseInt(inputValC);
    if (solveFor == 'A') {
    	var solveA = a/c;
    	result = Math.asin(solveA);
    	printAnswer();
    }
    if (solveFor == 'B') {
    	var solveB = b/c;
    	result = Math.asin(solveB);
    	printAnswer();
    }
} 

function printAnswer(){
	document.getElementById("answer").innerText = "result: " + result;
}

function B(){
	document.getElementById("angleA").checked = false;
	document.getElementById("list").children[0].style.visibility="hidden";
	document.getElementById("list").children[1].style.visibility="visible";
	document.getElementById("list").children[2].style.visibility="visible";
	solveFor = 'B';
}
function A(){
	document.getElementById("angleB").checked = false;
	document.getElementById("list").style.visibility="hidden";
	document.getElementById("list").children[0].style.visibility="visible";
	document.getElementById("list").children[1].style.visibility="hidden";
	document.getElementById("list").children[2].style.visibility="visible";
	solveFor = 'A';
}

