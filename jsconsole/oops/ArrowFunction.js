function display(a,b)
{
    return 'old syntax';
}

let display1=function(a,b){
    console.log('medium syntax');
}


let display2 = (a,b)=>{
   console.log(a+b)
}
let display3 = (a,b)=>{
    return a+b;
}

let display4 =(a,b)=>a+b;

console.log(display())
display1(1,2)
display2(100,20)
console.log(display3(1,2))
console.log
