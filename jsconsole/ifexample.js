let year=1000;
if(year%400==0 || (year%4==0 && year%100!=0))
{
    console.log('leap year');
}
else
{
    console.log('not leap year');
}