let arr=[1,4,5,6,2,3,7]
let arr1=[3,2,2]

let x=[]

for(let o of arr)
{
   x.push(o)
}
for(let o of arr1)
{
   x.push(o)
}
//let z = [...arr,...arr1]
for(let o of x){
   console.log(o)
}