person1=45
person2=65
person3=93
person4=78
if(person1>person2)
{
   if(person1>person3)
   {
       if(person1>person4)
          console.log('person1 is greatest');
       else
           console.log('person4 is greatest');
   }
   else
   {
       if(person3>person4)
          console.log('person3 is greatest');
        else
          console.log('person 4 is greaest')
   }
}
else
{
    if(person2>person3)
    {
        if(person2>person4)
            console.log('person2 is greatest');
         else
             console.log('person4 is greatest');
    }
    else
    {
        if(person3>person4)
            console.log('person3 is greatest');
          else
            console.log('person 4 is greaest')
    }

}