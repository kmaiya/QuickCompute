function moreInfo(input) {
document.getElementById("elementFrame").style.border= "none";
$("#"+input).removeClass("specHovRet");
	$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "periodicTable.xml",
    dataType: "xml",
    success: function(xml){
    $(xml).find('element[id ='+input+']').each(function(){
      var aNumber = $(this).find('aNumb').text();
      var aSymbol = $(this).find('aSymb').text();
      var aMass =$(this).find('aMass').text();
      var aGroup =$(this).find('aGroup').text();
      document.getElementById("name").innerHTML = $(this).find('aName').text();
      document.getElementById("symbol").innerHTML = $(this).find('aSymb').text();
      document.getElementById("mass").innerHTML = $(this).find('aMass').text();
      document.getElementById("number").innerHTML = $(this).find('aNumb').text();
      document.getElementById("group").innerHTML = $(this).find('aGroup').text();
      if (aGroup == 'Alkali Metal') {
      	$("#elementFrame").css("background-color", "#FF8080");
      }
      if (aGroup == 'Alkaline Earth') {
      	$("#elementFrame").css("background-color", "lightblue");
      }
      if (aGroup == 'Transition Metal') {
      	$("#elementFrame").css("background-color", "#A3FFA3");
      }
      if (aGroup == 'Basic Metal') {
      	$("#elementFrame").css("background-color", "#C6A3FF");
      }
      if (aGroup == 'Metalloid') {
      	$("#elementFrame").css("background-color", "#FFFF50");
      }
      if (aGroup == 'Halogen') {
      	$("#elementFrame").css("background-color", "#ffae3f");
      }
      if (aGroup == 'Non Metal') {
      	$("#elementFrame").css("background-color", "#50ebec");
      }
      if (aGroup == 'Lanthanides') {
      	$("#elementFrame").css("background-color", "#43c6db");
      }
      if (aGroup == 'Noble Gas') {
      	$("#elementFrame").css("background-color", "#7fffd4");
      }
      if (aGroup == 'Actinides') {
      	$("#elementFrame").css("background-color", "#F676FB");
      }
    });
  },
  error: function() {
    alert("An error occurred while processing XML file.");
  }
  });
});
}
function adderHelper(input) {
	window["elemNum"] = input;
	$(".elemGroups").removeClass("elemGroups").addClass("placeHold");
	if (Modernizr.cssfilters) {
		$("#elementFrame").removeClass("divFrame").addClass("divFrameBlur");
	}
	else {
		var bcolor = $("#"+input).css("background-color");
		$("#elementFrame").removeClass("divFrame").addClass("divFrameHide");
		$("#onlymoz").removeClass("divFrameHide").addClass("divFrame").css("background-color",bcolor);
	}
	$("#numPrompt").removeClass("divFrameHide").addClass("divFrame");
	$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "periodicTable.xml",
    dataType: "xml",
    success: function(xml){
    $(xml).find('element[id ='+input+']').each(function(){
      var aNumb =$(this).find('aSymb').text();
     document.getElementById("number2").innerHTML = aNumb;
    });
  },
  error: function() {
    alert("An error occurred while processing XML file.");
  }
  });
});
}
function cancelOp() {
$(".placeHold").addClass("elemGroups").removeClass("placeHold");
	window["elemNum"] = "";
	if (Modernizr.cssfilters) {
	$("#elementFrame").addClass("divFrame").removeClass("divFrameBlur");
}
else {
	$("#elementFrame").addClass("divFrame").removeClass("divFrameHide");
	$("#onlymoz").addClass("divFrameHide").removeClass("divFrame");
}
	$("#numPrompt").addClass("divFrameHide").removeClass("divFrame");
	$("#subscript").val('');
}
function adder(input) {
var sum = 0;
for (var i = 0; i < window['compoundArr'].length; i++) {
	sum+=Number(window['compoundArr'][i]);
}
document.getElementById("mMass").innerHTML = sum;
document.getElementById("molComp").innerHTML = document.getElementById("result").innerHTML;
document.getElementById("result").innerHTML = "";
window['compoundArr']=[];
window['elemNum']="";
if (Modernizr.cssfilters) {
	$("#elementFrame").addClass("divFrame").removeClass("divFrameBlur");
}
else {
	$("#elementFrame").addClass("divFrame").removeClass("divFrameHide");
	$("#onlymoz").addClass("divFrameHide").removeClass("divFrame");
}
$("#numPrompt").addClass("divFrameHide").removeClass("divFrame");
}

function adderArray(aNum) {
$(".placeHold").addClass("elemGroups").removeClass("placeHold");
	var counter = $('#subscript').val();
	$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "periodicTable.xml",
    dataType: "xml",
    success: function(xml){
    $(xml).find('element[id ='+aNum+']').each(function(){
      var aMass =$(this).find('aMass').text();
     for (var i = 0; i < counter; i++) {
     	window['compoundArr'].push(aMass);
     }
     if (counter =="") {
     	window['compoundArr'].push(aMass);
     }
     if (document.getElementById("result").innerHTML=="QElements") {
     	document.getElementById("result").innerHTML = $(this).find('aSymb').text();
     	if (counter!=1) {
     		$("<sub style = 'font-size:25px'></sub>").html(counter).appendTo("#result");
     	}
     }
     else {
     	document.getElementById("result").innerHTML += $(this).find('aSymb').text();
     	if (counter!=1) {
     		$("<sub style = 'font-size:25px'></sub>").html(counter).appendTo("#result");
     	}
     }
      $("#subscript").val('');
     if (Modernizr.cssfilters) {
	$("#elementFrame").addClass("divFrame").removeClass("divFrameBlur");
}
else {
	$("#elementFrame").addClass("divFrame").removeClass("divFrameHide");
	$("#onlymoz").addClass("divFrameHide").removeClass("divFrame");
}
	$("#numPrompt").addClass("divFrameHide").removeClass("divFrame");
    });
  },
  error: function() {
    alert("An error occurred while processing XML file.");
  }
  });
});
}
function reset() {
	document.getElementById("result").innerHTML = "";
	document.getElementById("mMass").innerHTML = "";
	document.getElementById("molComp").innerHTML = "";
	window['compoundArr']=[];
	window['elemNum']="";
	if (Modernizr.cssfilters) {
	$("#elementFrame").addClass("divFrame").removeClass("divFrameBlur");
}
else {
	$("#elementFrame").addClass("divFrame").removeClass("divFrameHide");
	$("#onlymoz").addClass("divFrameHide").removeClass("divFrame");
}
	$("#numPrompt").addClass("divFrameHide").removeClass("divFrame");
}
 function highlightgroup(input) {
 	$("#"+input+"group").addClass("lanthIDgroup");
 }
function stophigh(input) {
 	$("#"+input+"group").removeClass("lanthIDgroup");
 }
 
function whichGroup(input)
{
$("td[name ="+input+"]").each(function() {
 	$(this).removeClass("specHovRet").addClass("specHov");
 	//$(this).removeClass("specHov");
});
}
function cancelPrev(input)
{
$("td[name ="+input+"]").each(function() {
 $(this).addClass("specHovRet").removeClass("specHov");
 //$(this).removeClass("specHovRet");
// remClass($(this));

});
}
function remClass(input) {
	input.removeClass("specHovRet");
}