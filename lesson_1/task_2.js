"use strict"

let login;
let password;

login = prompt("Who's there?", "");
if(login == "Admin"){
	password = prompt("Password?", "");
	if(password == "TheMaster"){
		alert("Wellcome");
	}else if(password == null){
		alert("Cenceled");
	}else{
		alert("Wrong password");
	}
}else if(login == null){
	alert("Censeled");
}else{
	alert("I don't know you");
}
