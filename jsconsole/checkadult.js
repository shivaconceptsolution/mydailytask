let gen='male'
let age=9
let s= (gen=='male' && age>=18 || gen=='female' && age>=21)?"ADULT":"NOT ADULT";
console.log(s);