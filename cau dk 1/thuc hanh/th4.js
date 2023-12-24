/*if (broweser == 'edge') {
// alert("You've got the Edge !");
}
else if (Browser == 'chrome' || broweser == 'Firefox' || broweser == 'safari'|| 'opera') {
    alert('okkay we support these borwsers too');
} 
else {
    alert('we hope that this page looks ok!');
} */
 switch (browser) {
    case 'edge':
        alert("you've got the edge");
        break;
        case 'chrome':
            case 'firefox':
                case 'safari':
                            case 'opera':
        alert('okay we that this these browsers too');
                        break;
                        default:
                            alert('We hope that this page looks ok !');
 }
 /*let a = prompt('a?', '');

if (a == 0) {
	alert(0);
}

if (a == 1) {
	alert(1);
}

if (a == 2 || a == 3) {
	alert('2,3');
*/
/*let a = prompt ('a?','');
switch (a) {
    case 'a':
    alert(0);
    break ;
    case'1':
    alert(1)
    break;
    case 2:
    case 3:
        alert('2,3')
        break;

}*/

//////
let value = prompt('Type a number', 0);
if (value > 0) {
	alert(1);
} else if (value < 0) {
	alert(-1);
} else {
	alert(0);
}

