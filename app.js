//var x= Math.random();//0----1>(flaot)
//console.log(x)
//console.log(x*10000)

function otpgen ()
{

var x=Math.random()*(9999-1000)+1000;
var otp=Math.floor(x)//remove the float values
console.log(otp)
var name=document.getElementById("input1").value;
document.getElementById("output").innerHTML=" Dear " + name + " your otp is " +otp
}


