
var calcBox = document.getElementById("calcBox");
var calcAns = document.getElementById("calcAns");

var sqrt = /\W/g;

function getNumber(x){
	calcBox.innerHTML += x.value;
	parseInt(calcBox);
}

function getOperation(y){
	if(y.value == "Clear"){
		calcBox.innerHTML = "";
		calcAns.innerHTML = "";
	}else if(sqrt.test(calcBox.innerHTML)){
		if(sqrt == null || sqrt == "%" || sqrt == " " || sqrt == "+" || sqrt == "-" || sqrt == "*" || sqrt == "/" || sqrt == "(" || sqrt == ")"){
			calcBox.innerHTML += " " + y.value + " ";
		}else if(y.value == "del"){
			var x = calcBox.innerHTML;
			var len = x.length - 1;
			var z = x.substring(0, len);
			
			calcBox.innerHTML = z;
		}else{
			calcBox.innerHTML += y.value + " ";
		}
	}else if(y.value == "del"){
		var x = calcBox.innerHTML;
		var len = x.length - 1;
		var z = x.substring(0, len);
		
		calcBox.innerHTML = z;
	}else{
		calcBox.innerHTML += " " + y.value + " ";
	}
}

var sound = new Audio();
sound.src = "yes.mp3";

function calculation(){
	try{
		var sin = /sin/;
		var sinForm = "";

		var cos = /cos/;
		var cosForm = "";

		var tan = /tan/;
		var tanForm = "";

		var e = /e/;
		var eForm = "";

		var log = /log/;
		var logForm = "";

		var sq = document.getElementById("sq").innerHTML;
		var sqrt = /\W/g;
		var sqrtForm = "";

		if(sin.test(calcBox.innerHTML)){
			sinForm = calcBox.innerHTML.replace(/sin/, "Math.sin(") + ")";
			calcAns.innerHTML = eval(sinForm);
		}else if(cos.test(calcBox.innerHTML)){
			cosForm = calcBox.innerHTML.replace(/cos/, "Math.cos(") + ")";
			calcAns.innerHTML = eval(cosForm);
		}else if(tan.test(calcBox.innerHTML)){
			tanForm = calcBox.innerHTML.replace(/tan/, "Math.tan(") + ")";
			calcAns.innerHTML = eval(tanForm);
		}else if(e.test(calcBox.innerHTML)){
			eForm = calcBox.innerHTML.replace(/e/, "Math.e(") + ")";
			calcAns.innerHTML = eval(eForm);
		}else if(log.test(calcBox.innerHTML)){
			logForm = calcBox.innerHTML.replace(/log/, "Math.log(") + ")";
			calcAns.innerHTML = eval(logForm);
		}else if(sqrt.test(calcBox.innerHTML)){
			sqrt = sqrt.exec(calcBox.innerHTML);
				if(sqrt == null || sqrt == "%" || sqrt == " " || sqrt == "+" || sqrt == "-" || sqrt == "*" || sqrt == "/" || sqrt == "(" || sqrt == ")"){
					calcAns.innerHTML = eval(calcBox.innerHTML);
				}else{
					sqrtForm = calcBox.innerHTML.replace(sqrt, "Math.sqrt(") + ")";
					calcAns.innerHTML = eval(sqrtForm);
				}
		}else{
			calcAns.innerHTML = eval(calcBox.innerHTML);
		}
	}catch (e){
		calcAns.innerHTML = e.message;
	}

}

function scientific() {
	document.getElementById("scientific").classList.toggle("show");
}
/*
function changeColor(x){
	var doc = document.getElementById("header").innerHTML;

	var qua = parseInt(0.25 * doc.length);
		var txt1 = doc.charAt(qua);

	var half = parseInt(0.5 * doc.length);
		var txt2 = doc.charAt(half);

	var qua2 = parseInt(0.75 * doc.length + 1);
		var txt3 = doc.charAt(qua2);
	
}
*/