let s ="123456"
let s1 = "6543"
let res = "anargam"
if(s.length==s1.length)
{
for(let i=0;i<s.length;i++) //1
{
    let c=0
    for(let j=0;j<s1.length;j++) //0
    {
         if(s.charAt(i)==s1.charAt(j))
         {
               c=1;
         }
    }
    if(c==0)
    {
       res = "not anargam"
       break;
    }
 
}

}
else
{
  res='not anargam'
}

console.log(res)