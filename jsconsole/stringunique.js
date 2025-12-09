let s = "shivacconceptsolution";
let m=0;
let mxchar='';
for(let i=0;i<s.length;i++)
{
    let f=true;
   
    let c=1;
    for(let k=0;k<i;k++)
    {
        if(s.charAt(i)==s.charAt(k))
        {
            f=false;
            break;
        }
    }
    for(let j=i+1;j<s.length && f;j++)
    {
        if(s.charAt(i)==s.charAt(j))
        {
            // f=true;
             c++;
        }
    }
    if(f)
    {
        if(m<c)
        {
            m=c;
            mxchar=s.charAt(i);

        }
        console.log(s.charAt(i),c);
       
    }
}
console.log('max repeated char is ',mxchar);