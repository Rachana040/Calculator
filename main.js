var string="";
var ans;
function append(val) {
	
	switch(val) {
	
	case 10:
		string += " / ";
		break;
		
	case 11:
		string += " X ";
		break;
    case 12:
		string += " - ";
		break;
			
	case 13:
		string += " + ";
		break;
	
	default:
	    string += val;
	}
}

function cal() {
	
	var prob = string.split(" "); 
	var op1 = parseInt(prob[0]);
	var op2 = parseInt(prob[2]);
	var op = prob[1];
	
	
	switch(op) {
		
		case "/":
			ans = op1/op2;
			break;
			
		case "-":
			ans = op1-op2;
			break;	
			
		case "+":
			ans = op1+op2;
			break;
		
		case "X":
			ans = op1*op2;
			break;
	}
	document.getElementById("ans").innerHTML = string+" = "+ans ;
	string = "";
}

function dlt() {
	
	if(string.length > 0)
		string = string.substring(0,string.length-1);
	
	document.getElementById("ans").innerHTML = string;
}

function clr() {
	
	 document.getElementById("ans").innerHTML = "<br/>";
}

function answer() {
	string += ans;
}