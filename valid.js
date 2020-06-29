//validation code for inputs

var username = document.forms['form']['username'];
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var username_error = document.getElementById('username_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

username.addEventListener('textInput', username_Verify);
email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', password_Verify);


function validated(){
	 if(username.value.length < 9){
		 username.style.border = "1px solid red";
		 username_error.style.display = "block";
		 username.focus();
		 return false;
	 }
	 if(email.value.length < 9){
		 email.style.border = "1px solid red";
		 email_error.style.display = "block";
		 email.focus();
		 return false;
}
 if(password.value.length < 9){
		 password.style.border = "1px solid red";
		 password_error.style.display = "block";
		 password.focus();
		 return false;
}
}


function username_Verify(){
	  if(username.value.length >= 8) {
		  username.style.border = "1px solid silver";
		  username_error.style.display = "none";
		  return true;
	  }
}
function email_Verify(){
	  if(email.value.length >= 8) {
		  email.style.border = "1px solid silver";
		  email_error.style.display = "none";
		  return true;
	  }
}
function password_Verify(){
	  if(password.value.length >= 8) {
		  password.style.border = "1px solid silver";
		  password_error.style.display = "none";
		  return true;
	  }
}