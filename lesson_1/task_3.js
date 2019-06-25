"use strict"

let login;
let password;

switch (login = prompt("Who's there?", "")) {
case "Admin":
	switch (password = prompt("Password?", "")) {
	case "TheMaster":
		alert("Wellcome");
		break;

	case null:
		alert("Cenceled");
		break;
		
	default:
		alert("Wrong password");
	break;
	}
	break;
	
case null:
	alert("Censeled");
	break;
default:
	alert("I don't know you");
}