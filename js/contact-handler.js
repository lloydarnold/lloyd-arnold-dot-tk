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
  form.emailIn.style.border = "2px solid red";
  fadeBack(form.emailIn, 0xBBBBBB);
  setTimeout( function(){form.emailIn.style.border = "1px solid #BBB";}, 1500 )
}

function fadeBack (element, targetCol) {
  // four second fade
  var currentCol = element.style.borderColor;
  targetCol = rgb(targetCol);
  diff = targetCol - currentCol;
  console.log(diff);
  for (var i = 0; i < 40; i++) {

  }
}