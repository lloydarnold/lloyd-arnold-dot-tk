function formHandler (form) {
  var name = form.nameIn.value;
  var email = form.emailIn.value;
  var phoneNum = form.phoneNumberIn.value;
  var message = form.messageIn.value;

  var valid = true;

  if (name == "") {
    highlightElement(form.nameIn);
    valid = false;
  }

  if (!validEmail(email)) {
    highlightElement(form.emailIn);
    valid = false;
  }

  if (message == "") {
    highlightElement(form.messageIn);
    valid = false;
  }

  return valid;

}

function reset(form) {
  form.nameIn.value="";
  form.emailIn.value="";
  form.phoneNumberIn.value="";
  form.messageIn.value="";
}

function validEmail (email) {
  var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailPattern.test(email);
}

function highlightElement (element) {
  element.style.borderColor = "#ff2200";
  fadeBack(element, "#BBBBBB");
}

function fadeBack (element, targetCol) {
  // three second fade
  var startCol = element.style.borderColor;
  var steps = 30;

  startCol = formatRGB(startCol);

  deltaR = (hexToR(targetCol) - startCol[0]) / steps
  deltaG = (hexToG(targetCol) - startCol[1]) / steps
  deltaB = (hexToB(targetCol) - startCol[2]) / steps

  for (var i = 0; i < steps; i++) {
    temp = `rgb( ${ startCol[0] + (deltaR * i)}, ${ startCol[1] + deltaG * i}, ${startCol[2] + deltaB * i} )`;
    setColour(element, temp, i)
  }
}

function setColour(element, colour, count) {
  setTimeout( function() {element.style.borderColor = colour;}, count * 100);
}

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
function formatRGB(raw) {
  raw = raw.substring(4, raw.length-1)
           .replace(/ /g, '')
           .split(',');
  var cooked = new Array(2);
  for (var i = 0; i < raw.length; i++) {
   cooked[i] = parseInt(raw[i]);
  }
  return cooked;
}
