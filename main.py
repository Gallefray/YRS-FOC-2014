class Goverment(object):
    def __init__(self, income, departments):
        self.dept = 0
        self.income = income
        self.outgoing = 0
        
        self.departments = departments
    
    def step(self):
        self.outgoing = 0
        
        complaints = []
        
        for department in self.departments:
            self.outgoing += department.amount
            
            complaints += department.get_complaints()
        
        if (self.outgoing > self.income):
            self.dept = self.outgoing - self.income
        
        return complaints
    
    def __str__(self):
        return "Goverment(dept=%d pounds income=%d pounds)" % (self.dept, self.income)

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
        return "Department(name=\"%s\" amount=%d pounds)" % (self.name,
               self.amount)
    
    __repr__ = __str__

g = Goverment(1000000, [Department("Rhys's Food", 1000000),
                        Department("Rhys's Servants", 1000000)])

print g
print g.step()
print g
