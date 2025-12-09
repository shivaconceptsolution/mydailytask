class Addition
{
    x;
    y;
    z;
    Accept(x,y)
    {
      this.x=x;
      this.y=y;
    }
    Add(x,y)
    {
        this.z=this.x+this.y;
    }
    Display()
    {
        console.log(`result is ${this.z}`)
    }
}


const obj = new Addition();
obj.Accept(100,2);
obj.Add();
obj.Display();
const obj1 = new Addition();
obj1.Accept(1000,20);
obj1.Add();
obj1.Display();