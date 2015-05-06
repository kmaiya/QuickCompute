
function number(input) {
document.getElementById("+").classList.remove("inverto");
document.getElementById("-").classList.remove("inverto");
document.getElementById("X").classList.remove("inverto");
document.getElementById("/").classList.remove("inverto");
document.getElementById("%").classList.remove("inverto");
var val = document.getElementById("result").innerHTML;
if (val=="QCalc"||val==""||val=="Error"||val=="+"||val=="-"||val=="X"||val=="/"||val=="%"||val=="undefined"||val=="NaN"||val=="^") {
	document.getElementById("result").innerHTML= input;
	if (val=="+"||val=="-"||val=="X"||val=="/"||val=="%"||val=="^") {
		document.getElementById("pastopera").innerHTML=val;
	}
}
else {
	var nString = val + input;
	var len = nString.length;
	if (len<17) {
		document.getElementById("result").innerHTML= nString;
	}
}
}
function ac() {
	document.getElementById("+").classList.remove("inverto");
document.getElementById("-").classList.remove("inverto");
document.getElementById("X").classList.remove("inverto");
document.getElementById("/").classList.remove("inverto");
document.getElementById("%").classList.remove("inverto");
	document.getElementById("result").innerHTML="";
	document.getElementById("pastnum").innerHTML="";
	document.getElementById("pastopera").innerHTML="";
	sessionStorage.clear();
	localStorage.clear();
}
function backSpace() {
	var s = document.getElementById("result").innerHTML;
	if(s=="+")
	{
	sessionStorage.removeItem("ope");
	document.getElementById("result").innerHTML="";
	}
	else{
	var len = s.length;
	s=s.substring(0, len - 1);
	document.getElementById("result").innerHTML=s;
	}
}
function opera(input) {
if(document.getElementById("result").innerHTML!=""&&document.getElementById("pastopera").innerHTML!="") {
	calcval();
	var oval = document.getElementById("result").innerHTML;
}
	var val = document.getElementById("result").innerHTML;
	document.getElementById("pastnum").innerHTML=val;
		if (val.indexOf("e", 0)) {
		sessionStorage.setItem("firstnum", Number(val));
	}
	else{
	sessionStorage.setItem("firstnum", val);
	}
	document.getElementById("result").innerHTML= input;
	sessionStorage.setItem("ope", input);
}
function calcval() {
	document.getElementById("pastnum").innerHTML="";
	document.getElementById("pastopera").innerHTML="";
	var val = parseFloat(sessionStorage.getItem("firstnum"));
	var ival =parseFloat(document.getElementById("result").innerHTML);
	if (sessionStorage.getItem("ope")=="+") {
		var ans = val + ival;
	}
	if (sessionStorage.getItem("ope")=="^") {
		var ans = Math.pow(val, ival);
	}
	if (sessionStorage.getItem("ope")=="-") {
		var ans = val - ival;
	}
	if (sessionStorage.getItem("ope")=="/") {
		var ans = val / ival;
	}
	if (sessionStorage.getItem("ope")=="X") {
		var ans = val *ival;
	}
	if (sessionStorage.getItem("ope")=="%") {
		var ans = val % ival;
	}
	if (ans.toString().length>16) {
		document.getElementById("result").innerHTML=ans.toExponential(3);
	}
	else{
	document.getElementById("result").innerHTML=ans;
	}
}
function plusminus() {
	var val = document.getElementById("result").innerHTML;
	if (val.substring(0, 1)=="-" && val!="") {
		document.getElementById("result").innerHTML=val.substring(1);
	}
	else {
		document.getElementById("result").innerHTML="-"+val;
	}
}
function settingsLaunch() {
	//document.getElementById("calc").className="calccent_blur";
	/*var box1 = $("#switchFrame");
	TweenLite.to(box1,1,{autoAlpha:1});*/
	TweenLite.to("#calc",1,{className:"calccent_blur"});
	var box1 = $("#settingFrame");
	TweenLite.to(box1,1,{opacity:1, display:"block"});
	//$("#settingFrame").fadeIn();
}
function settingsLaunch1() {
	/*var box1 = $("#settingFrame");
	TweenLite.to(box1,1,{autoAlpha:0});*/
	var box1 = $("#settingFrame");
	TweenLite.to(box1,1,{opacity:0, display:"none"});
	//$("#settingFrame").fadeOut();
	setTimeout(function() {
	TweenLite.to("#calc",0,{className:"calccent"});
    $//("#calc").removeClass("calccent_blur").addClass("calccent");  
}, 600);
}
function colorSet(input) {
	var lopo = "n"+input;
	localStorage.setItem("col", input)
	parent.document.getElementById("completecalc").className = lopo;
}
function locstor() {
	var colors=localStorage.getItem("col");
	localStorage.removeItem("col")
	colorSet(colors);
}
function switchLaunch() {
	//document.getElementById("calc").className="calccent_blur";
	TweenLite.to("#calc",1,{className:"calccent_blur"});
	var box1 = $("#switchFrame");
	TweenLite.to(box1,1,{opacity:1, display:"block"});
	//$("#switchFrame").fadeIn();
}
function switchLaunch1() {
	var box1 = $("#switchFrame");
	TweenLite.to(box1,1,{opacity:0, display:"none"});
	//$("#switchFrame").fadeOut();
setTimeout(function() {
    //$("#calc").removeClass("calccent_blur").addClass("calccent");  
    TweenLite.to("#calc",0,{className:"calccent"});
}, 400);
}
function specpower(input) {
var val = document.getElementById("result").innerHTML;
	if (input=="square") {
		var ans = Math.pow(parseFloat(val), 2);
	}
	if (input =="cube") {
		var ans = Math.pow(parseFloat(val), 3);
	}
	if (input =="ln") {
		var ans = Math.log(parseFloat(val));
	}
	if (input =="log10") {
		var ans = Math.log(parseFloat(val))/Math.log(10);
	}
	if (input=="etox") {
		var ans = Math.pow(Math.E, parseFloat(val));
	}
	if (input =="2tox") {
		var ans = Math.pow(2, parseFloat(val));
	}
	if (input =="quart") {
		var ans = Math.pow(parseFloat(val), 4);
	}
	if (input=="squarer") {
		var ans = Math.sqrt(parseFloat(val), 2);
	}
	if (input =="cuber") {
		var ans = Math.pow(parseFloat(val), 1/3);
	}
	if (input =="quarter") {
		var ans = Math.pow(parseFloat(val), 1/4);
	}
	if (input=="sin") {
		var ans = Math.sin(parseFloat(val));
	}
	if (input =="cos") {
		var ans = Math.cos(parseFloat(val));
	}
	if (input=="!") {
		var ans = factorial(parseFloat(val));
	}
	if (input =="tan") {
		var ans = Math.tan(parseFloat(val));
	}
	if (ans.toString().length>18) {
		document.getElementById("result").innerHTML=ans.toExponential(3);
	}
	else{
	//document.getElementById("result").innerHTML=ans;
	if (ans==NaN) {
		document.getElementById("result").innerHTML="Error";
	}
	else {
		document.getElementById("result").innerHTML=ans;
	}
	}
}
function factorial(n) {
	if (n<0) {
		return NaN;
	}
	else if (n<=1) {
		return 1;
	}
	else{
	return n*factorial(n-1);
	}
}
function addmem() {
sessionStorage.setItem("mem",document.getElementById("result").innerHTML);
}
function clearmem() {
	sessionStorage.removeItem("mem");
}
function recallmem() {
	document.getElementById("result").innerHTML=sessionStorage.getItem("mem");
}
function beast() {
	var oldcheck=localStorage.getItem("col");
	document.getElementById(oldcheck).checked ="checked";
}
function clearVal(input) {
if(document.getElementById(input).innerHTML=="Please leave me a review!")
{
	document.getElementById(input).innerHTML="";
	document.getElementById(input).style.color="black";
	}
}
function defVal(input) {
if (document.getElementById(input).innerHTML=="") {
	document.getElementById(input).innerHTML="Please leave me a review!";
	document.getElementById(input).style.color="lightgray";
	}
}

function explainer(input) {

	var box = $("#infobox");
	TweenLite.to(box,1,{autoAlpha:1});
	if (input == "switch") {
		$("#infobox").html("Extra Functions");
	}
	else if (input == "settings") {
		$("#infobox").html("Settings");
	}
	else if (input == "ce") {
		$("#infobox").html("Clear Everything");
	}
	else if (input == "del") {
		$("#infobox").html("Backspace");
	}
	else if (input == "pm") {
		$("#infobox").html("Plus/Minus");
	}
	else if (input == "!") {
		$("#infobox").html("Factorial");
	}
	else if (input == "m+") {
		$("#infobox").html("Add to Memory");
	}
	else if (input == "mc") {
		$("#infobox").html("Clear Memory");
	}
	else if (input == "mr") {
		$("#infobox").html("Memory Recall");
	}
	else if (input == "switch") {
		$("#infobox").html("Return to Core Functions");
	}
	else if (input == "e") {
		$("#infobox").html("Scientific Notation");
	}
}
function cexplainer(input) {
	var box = $("#infobox");
	TweenLite.to(box,1,{autoAlpha:0});
}
function onhover(input) {
if (input != "del" && input != "ce") {
	var butt = document.getElementById(input);
TweenLite.to(butt, 1,{color:"#007aff", borderColor:"#007aff",scale:1.25});
}
else {
	var butt = document.getElementById(input);
TweenLite.to(butt, 1,{color:"#ff3b30", borderColor:"#ff3b30",scale:1.25});
}
}
function onhoverout(input) {
	var butt = document.getElementById(input);
TweenLite.to(butt, 1,{color:"black", borderColor:"black",scale:1});
}
function onhoverup(input) {
if (input != "del" && input != "ce") {
	var butt = document.getElementById(input);
TweenLite.to(butt, 1,{color:"#007aff", borderColor:"#007aff"});
}
else {
	var butt = document.getElementById(input);
TweenLite.to(butt, 1,{color:"#ff3b30", borderColor:"#ff3b30"});
}
}
function onhoverdown(input) {
if (input != "del" && input != "ce") {
	var butt = document.getElementById(input);
TweenLite.to(butt, 1,{color:"#b1d6ff", borderColor:"#b1d6ff"});
}
else {
	var butt = document.getElementById(input);
TweenLite.to(butt, 1,{color:"#ff9892", borderColor:"#ff9892"});
}
}