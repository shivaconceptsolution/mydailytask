let year=1000
let s =''
if(year%400==0)
    {
         s = 'Leap Year'
    } 
else
    {
     if(year%4==0)  
     {
        if(year%100!=0)
        {
           s = 'Leap Year'
        }
        else
        {
          s = 'Not Leap Year'
        }
     }
     else
     {
        s = 'Not Leap Year'
     }
    } 
console.log(s)