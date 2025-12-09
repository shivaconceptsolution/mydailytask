var rno;
var name;
var branch;
var fees;
function acceptStudentInfo(rno1,name1,branch1,fees1)
{
    rno=rno1;
    name=name1;
    branch=branch1;
    fees=fees1;
   

}
function displayStudentInfo()
{
    console.log(`rno is ${rno} name is ${name} branch is ${branch} and fees is ${fees}`)
}

acceptStudentInfo(1,'stu1','cs',45000);
displayStudentInfo();


acceptStudentInfo(2,'stu2','cs',45000);
displayStudentInfo();
