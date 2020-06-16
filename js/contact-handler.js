function formHandler (form) {
  var name = form.nameIn.value;
  var email = form.emailIn.value;
  var phoneNum = form.phoneNumberIn.value;
  var message = form.messageIn.value;

  alert ("Your name is : " + name);

}

function validEmail (email) {
  var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailPattern.test(email);
}
