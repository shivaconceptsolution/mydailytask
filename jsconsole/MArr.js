let arr1=[[1,2,3],[3,4,6]];
let arr2=[[1,2,3],[3,4,6]];

for(let i=0;i<2;i++)
{
    let r=''
   for(let j=0;j<3;j++)
   {
       r+=(arr1[i][j]+arr2[i][j])+ " ";
   }
   console.log(r)
}


