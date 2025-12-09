let obj = new Map();
obj.set("rno",1001);
obj.set("name","xyz");
obj.set("branch","CS");
obj.set("fees",45000);

/*for(let row of obj.entries())
{
    for(let data of row)
    {
        console.log(data)
    }
    console.log()
   
}*/

for(let key of obj.keys())
{
    console.log(key+","+obj.get(key));
}
obj.forEach((k,v)=>{
console.log(`key is ${k} and value is ${v}`)
})