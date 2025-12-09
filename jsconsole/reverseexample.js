let num=123456
let rev=''
while(num!=0) //1234!=0
{
    rev=rev+num%10 //65
    num=parseInt(num/10) //1234
}
console.log(rev)