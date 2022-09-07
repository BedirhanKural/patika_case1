function oddishOrEvenish(num)
{
var num_digit=0;
var sum=0;
num_digit=parseInt(num.toString().length);
for(i=0;i<=num_digit;i++){
sum=(num%10)+sum;
num=Math.floor(num/10);
}
if (sum%2==0){
return "Even";
}
else return "Odd";
}
console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));
