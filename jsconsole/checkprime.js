// if the number is not divisible by range 2 to num-1 then it is prime
// if the number is divisible 1 and self then it is prime
let num=6
let i=2;
let result='prime';
while(i<num)
{
    if(num%i==0)
    {
        result='not prime';
        break;
    }
    i++;
}
console.log(result)