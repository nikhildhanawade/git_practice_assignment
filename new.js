// 1. Prime Number

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


// 2. Paliondrome String
let str = "MADAM";
let flag = true;
let len = str.length;
for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        flag = false;
    }

}
if (flag) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

