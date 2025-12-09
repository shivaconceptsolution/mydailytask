class StudentInfo
{
   #rno;
   #sname;
   
   set rno(data)
   {
    this.#rno=data;
   }
   get rno()
   {
    return this.#rno;
   }
    constructor(rno,sname)
    {
        this.#rno=rno;
        this.#sname=sname;
    }
    DisplayStudentInfo()
    {
        console.log(`rno is ${this.#rno}`)
        console.log(`name is ${this.#sname}`)
    }

}
let obj = new StudentInfo(1001,'Manish Kumar');
obj.rno=1003;
console.log(obj.rno);
obj.DisplayStudentInfo();

