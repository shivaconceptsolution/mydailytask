function hello()
{
    console.log('hello world');
}
function displayResult(output,fun1)
{
    fun1()
    console.log(output)
}

function calculate(a,b,fun)
{
   c=a+b;
   fun(c,hello);
}

calculate(100,20,displayResult);

