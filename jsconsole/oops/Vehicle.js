class Vehicle
{
    VehicleAccept(brandname,modelname)
    {
        this.brandname=brandname;
        this.modelname=modelname
    }
    VehicleInfo()
    {
        console.log(`brand name is ${this.brandname} and modelname is ${this.modelname}`)
    }
}

class Car extends Vehicle
{
    CarAccept(price)
    {
        
        this.price=price;
    }
    CarInfo()
    {
        console.log(`price is ${this.price}`)
    }
}

class Bike extends Car
{
    BikeAccept(milege)
    {
       
       this.milege=milege
    }
    BikeInfo()
    {
        console.log(`milege is ${this.milege}`)
    }
}

let obj = new Car();
obj.VehicleAccept('TATA','nexon');
obj.VehicleInfo()
obj.CarAccept(140000)
obj.CarInfo()

let obj1 = new Bike()
obj1.VehicleAccept('HERO','HERO 450x');
obj1.CarAccept(65000)
obj1.BikeAccept(40)
obj1.VehicleInfo()
obj1.BikeInfo();
obj1.CarInfo();

obj.CarAccept(140000)