var f=false;
const task = new Promise(
    function(myresolve,myreject){
        setTimeout(function(){
            if(f)
            {
                myresolve("Success");
            }
            else
            {
                myreject("Error");
            }
            
        },3000);

    }
);

task.then(function(param){
    console.log(param);
}).catch(function(param){
    console.log(param)
});