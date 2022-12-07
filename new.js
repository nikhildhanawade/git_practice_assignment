var n = 6;
var i;
var flag = true;
for (i = 2; i < n; i++) {
    if (n % i == 0) {
        flag = false;
        break;
    }
}
if (flag) {
    console.log("It Is Prime Number");
} else {
    console.log("It is not Prime Number");
}