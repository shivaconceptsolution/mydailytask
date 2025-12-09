let s = "aman"
let r=''
for(let i=s.length-1;i>=0;i--)
{
   r=r+s.charAt(i)
}
console.log(r)
if(s===r)
{
    console.log('pallindrom')
}
else
{
    console.log('not pallindrom')
}