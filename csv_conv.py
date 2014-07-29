import csv
import json

csvfile = open('data/oscar.csv', 'r')
jsonfile = open('data/oscar_json.json', 'w')

fieldnames = ("name", "value")
reader = csv.DictReader( csvfile, fieldnames)

d = {}

for row in reader:
    if row["name"] in d.keys():
        try:
          d[row["name"]] += int(row["value"]) #TODO: This is not working.
        except:
            print "Invalid number: \"%s\"" % row["value"]
    else:
        try:
            d[row["name"]] = int(row["value"])
        except:
            print "Invalid number: \"%s\"" % row["value"]

json.dump(d, jsonfile, indent=4)

jsonfile.write('\n')

jsonfile.close()
