let num=52
let s = ""
if(num%3==0)
    s+='divisible by 3 \n'  //s = s+ 'divisible by 3'
if(num%5==0)
    s+='divisible by 5 \n'
if(num%9==0)
    s+='divisible by 9 \n'
if(s=="")
    s="Not divisible by any"
console.log(s)
