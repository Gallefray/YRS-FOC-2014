class Goverment(object):
    def __init__(self, income, s, departments):
        self.dept = 0.0
        self.income = income
        self.s = s #How much this goverment has.
        
        self.departments = departments
    
    def step(self):
        self.s += self.income
        
        complaints = []
        
        for department in self.departments:
            self.s -= department.amount
            
            complaints += department.get_complaints()
        
        if (self.s < 0.0):
            self.dept += +self.s
            self.s = 0.0
        
        return complaints
    
    def __str__(self):
        return "Goverment(dept=%f pounds income=%f pounds s=%f pounds)"
               % (self.dept, self.income, self.s)

class Department(object):
    def __init__(self, name, amount):
        self.name = name
        
        self.amount = amount
    
    def get_complaints(self):
		if self.amount < 0: #TODO: What number should be here?
			return ["No little money being invested in %s." % (self.name)]
		else:
			return []
    
    def __str__(self):
        return "Department(name=\"%s\" amount=%f pounds)" % (self.name,
               self.amount)
    
    __repr__ = __str__

g = Goverment(1000000, 0, [Department("Rhys's Food", 1000000),
                           Department("Rhys's Servants", 1000000)])

print g
print g.step()
print g
