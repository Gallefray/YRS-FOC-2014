function Goverment(income, departments)
{
    this.dept = 0
    this.income = income
    this.outgoing = 0
    
    this.departments = departments
    
    this.step = function()
    {
        this.outgoing = 0
        
        var complaints = []
        var complaint = 0
        
        for (i in this.departments)
        {
            this.outgoing += this.departments[i].amount
            
            complaint = this.departments[i].get_complaints()
            
            if (complaint != 0)
            {
                complaints[complaints.length] = complaint
            }
        }
        
        if (this.outgoing > this.income)
        {
            this.dept = this.outgoing - this.income   
        }
        
        return complaints
    }
    
    this.toString = function()
    {
        return "Goverment(dept="+this.dept.toString()+" pounds income="+this.income.toString()+" pounds outgoing="+this.outgoing.toString()+" pounds)"
    }
    
    return this
}

function Department(name, amount)
{
    this.name = name
    
    this.amount = amount
    this.start_amount = amount
    
    this.get_complaints = function()
    {
        if (this.amount < this.start_amount/2)
        {
            return "Too little money being invested in " + this.name
        } else
        {
            return 0
        }
    }
    
    this.toString = function()
    {
        return "Department(name=\""+this.name+"\", amount="+this.amount.toString()+" pounds)"
    }
    
    return this
}

var d = [new Department("Rhys's Food", 1000000),
         new Department("Rhys's Servants", 1000000)]

var g = new Goverment(1000000, d)

console.log(g.toString())

console.log(g.step())

console.log(g.toString())
