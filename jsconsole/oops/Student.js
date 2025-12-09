class Student
{
    rno;
    name;
    branch;
    fees;
    acceptStudentInfo(rno,name,branch,fees)
    {
        this.rno=rno;
        this.name=name;
        this.branch=branch;
        this.fees=fees;

    }
    displayStudentInfo()
    {
        console.log(`rno is ${this.rno} name is ${this.name} branch is ${this.branch} and fees is ${this.fees}`)
    }
}

let obj = new Student();
obj.acceptStudentInfo(1001,'stu1','cs',120000);
obj.displayStudentInfo();

let obj1 = new Student();
obj1.acceptStudentInfo(1002,'stu2','EC',42000);
obj1.displayStudentInfo();