let pin=484221
let mxpin=0
while(pin!=0)
{
    let num= pin%10;
    if(mxpin<num)
    {
        mxpin=num; //8
    }
    pin=parseInt(pin/10)

}
console.log('max digit in pin code is ',mxpin)