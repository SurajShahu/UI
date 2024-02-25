// for (i = 1; i <= 5; i++) {
//     document.write(i + "<br/>")
// }
var j = 10;
while (j >= 1) {
    document.write(j + "<br/>");
    j--;
}
let a = 20;
if (a % 2 == 0) {
    document.write("a is even number");
}
else {
    document.write("a is a odd number");
}
var i = 1;
do {
    document.write(i + "<br/>");
    i++;
} while (i <= 0);
var grade = 'C';
var result;
switch (grade) {
    case 'A':
        result = "A grade";
        break;
    case 'B':
        result = "B grade";
        break;
    case 'C':
        result = 'C grade';
        break;
    default:
        result = "No grade";
}
document.write(result);