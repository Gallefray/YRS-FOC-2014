import csv

f = open('data/oscar.csv', 'rb')

def getcsv(filename):
	data = []
	reader = csv.reader(filename)
	for line in reader:
		value = 0
		name = ''
		occur = 1 # is this the first occurence of the department?
		
		
		
		print line
	
	return data

getcsv(f)
