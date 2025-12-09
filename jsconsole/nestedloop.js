for(let i=1;i<=5;i++)
{
    let r=''
    for(let j=1;j<7-i;j++)
    {
        if(i%2!=0)
          r= r + "*" //12
        else
          r=r+"@"
    }
     
    console.log(r);
}
