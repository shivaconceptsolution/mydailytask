let arr = [1,2,3,4,1,2,3]
for(let i=0;i<arr.length;i++)
{
    let f = true;
    for(let j=0;j<arr.length;j++)
    {
             if(arr[i]==arr[j] && i!=j)
             {
                f=false;
                break;
             }
    }
    if(f)
    {
        console.log(arr[i])
    }
}