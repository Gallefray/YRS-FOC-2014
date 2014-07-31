function Goverment(income, departments)
{
    this.debt = 0
    this.income = income
    this.outgoing = 0
    
    this.departments = departments
    
    this.step = function()
    {
        this.outgoing = 0
        this.debt = 0
        
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
            this.debt = this.outgoing - this.income   
        }
        
        return complaints
    }
    
    this.toString = function()
    {
        return "Goverment(debt="+this.debt.toString()+" pounds income="+this.income.toString()+" pounds outgoing="+this.outgoing.toString()+" pounds)"
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

function loadJSON(income, json_data)
{
    var data = JSON.parse(json_data)
    
    var keys = Object.keys(data)
    
    var departments = []
    
    for (i in keys)
    {
        departments[departments.length] = new Department(keys[i], data[keys[i]])
    }
    
    return Goverment(income, departments)
}

//eval(loadJSON(0, data_load()).departments);
//console.log(data_load().departments.toString());
//console.log(loadJSON(0, "{\"abc\":15, \"pP\":70}").departments.toString())

