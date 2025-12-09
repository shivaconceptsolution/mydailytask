let x = [1,9,5,4,3]
console.log(x[3])
for(let i=0;i<x.length;i++)
{
     console.log(x[i]);
}
console.log('Array with For--OF Loop')
for(let item of x)
{
  console.log(item);
}
console.log('Array with For--IN Loop')
for(let index in x)
{
  console.log(x[index]);
}

console.log('for each loop')
x.forEach((item)=>{
  console.log(item);
})