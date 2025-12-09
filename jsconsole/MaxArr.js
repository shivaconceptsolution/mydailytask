let x = [12,23,67,78,89,11,2]
let mx=0
for(let item of x)
{
   if(mx<item)
   {
    mx=item;
   }
}
console.log(mx)