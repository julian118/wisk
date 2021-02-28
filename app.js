function calc() {
var values = document.getElementById("values");
var calcD = document.getElementById("calculateD");
var filled = document.getElementById("filled1")
var final = document.getElementById("final");

var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
var c = document.getElementById("c").value;

values.innerHTML = "a = " + a + ", b = " + b +" and c = " + c;
var d = (b * b) - 4 * a * c;
calcD.innerHTML = "d = " + b + "²" + " - 4 * " + a + " * " + c + " = " + d;
if (d < 0) {
    alert ("this equation is not possible");
}
var d = Math.sqrt(d)
console.log("discriminant squered " + d);
 
var half1 = -b + d;
var half2 = -b - d;
var result1 = half1 / (2 * a);
var result2 = half2 / (2 * a);
filled.innerHTML = "-" + b + " +- " + d + "/ (" + 2 + "*" + a + ")";
console.log("x1 =" + result1)
console.log("x2 =" + result2)
final.innerHTML = "x1 = " + result1 + "  or"   +" x2 = " + result2;

}