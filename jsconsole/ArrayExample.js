let course = ["C","CPP","JAVA","PHP","JS",12,2,3.4,true]
console.log(typeof course)
course.push("PYTHON")
course.push("ANDROID")
console.log(course[2])

for(let i=0;i<course.length;i++)
{
   console.log(course[i]);
}
console.log('display using for --of ')
for(let o of course)
{
    console.log(o)
}

console.log('display using for --of ')
for(let o in course)
{
    console.log(course[o])
}

console.log('display using for --each ')

course.forEach(
    (item)=>{
    console.log(item)
}
)