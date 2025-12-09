var student = 

[   
    {rno:1001,name:"manish kumar",branch:"cs",fees:45000},
    {rno:1002,name:"manish kumar",branch:"cs",fees:45000}
];

student.forEach(item=>{
    for(var key in item)
    {
        console.log(key,item[key])
    }
})
var products={
    user:[{uid:1,uname:'user1'},{uid:2,uname:'user2'}],
    product:[{pid:1,pname:'xyz'},{pid:2,pname:'abcd'}]
}
products.user.forEach(item=>console.log(item))
products.product.forEach(item=>console.log(item))