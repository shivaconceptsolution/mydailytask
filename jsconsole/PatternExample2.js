for(let i=1;i<=5;i++)
{
   let a=1
   let b=0
   let res = ''
    for(let j=1;j<=6-i;j++)
    {
           if(j%2!=0)
           {
             res = res + a + " "
             a=0
           }
           else
           {
            res = res + b + " "
            b=1
           }
    }
    console.log(res)
}