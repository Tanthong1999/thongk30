let userName = prompt("Who's there?", '');
if (userName == 'Admin') {
} else if (userName == null) {
	alert('Canceled');
} else {
	alert("I don't know you");
}
if (pass == 'TheMaster') {
	alert('Welcome!');
} else if (pass == null) {
	alert('Canceled.');
} else {
	alert('Wrong password');
}
