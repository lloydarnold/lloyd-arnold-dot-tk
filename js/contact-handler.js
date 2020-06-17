function formHandler (form) {
  var name = form.nameIn.value;
  var email = form.emailIn.value;
  var phoneNum = form.phoneNumberIn.value;
  var message = form.messageIn.value;

  if (!validEmail(email)) {
    highlightEmail(form);

  }

  /* alert ("Your name is : " + name); */

}

function validEmail (email) {
  var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailPattern.test(email);
}

function highlightEmail (form) {
  form.emailIn.style.borderColor = "#ff2200";
  fadeBack(form.emailIn, "#BBBBBB");
  // setTimeout( function(){form.emailIn.style.border = "1px solid #BBB";}, 1500 )
}

function fadeBack (element, targetCol) {
  // four second fade
  var startCol = element.style.borderColor;
  var steps = 40;

  startCol = formatRGB(startCol);

  deltaR = (hexToR(targetCol) - startCol[0]) / steps
  deltaG = (hexToG(targetCol) - startCol[1]) / steps
  deltaB = (hexToB(targetCol) - startCol[2]) / steps

  for (var i = 0; i < steps; i++) {
    temp = `( ${ startCol[0] + (deltaR * i)}, ${ startCol[1] + deltaG * i}, ${startCol[2] + deltaB * i} )`;
    setTimeout(function() {element.style.borderColor = temp;} , 100);
  }
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
