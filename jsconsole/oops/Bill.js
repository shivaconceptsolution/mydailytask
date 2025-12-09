class Bill
{
    DisplayBill()
    {
        console.log('billing info');
    }
    CalculateBill(amount,qty)
    {
        return amount*qty;
    }
}

class BillNew extends Bill
{
    CalculateBill(amount,qty)
    {
        let total=amount*qty
        return total+(total*0.18);
    }
    
}


let obj = new BillNew();
console.log(obj.CalculateBill(2000,12));
obj.DisplayBill()