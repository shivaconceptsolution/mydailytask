let x = [12,23,67,78,89,11,2]
for(let num of x)
{
    let f=true
   for(let i=2;i<num;i++)
   {
    if(num%i==0)
    {
        f=false;
        break;
    }
   }
   if(f)
   {
    console.log(num)
   }
}