import csv
import json

csv_file = open("data/gov-spend-2012.csv")
json_file = open("data/gov-spend-2012.json", "w")

reader = csv.DictReader(csv_file)

json_data = {"comment": "Values are measured in billions of pounds"}

for row in reader:
    json_data[row["UK SPENDING 2011-12"]] = row["a"]

json.dump(json_data, json_file, indent=4)

csv_file.close()
json_file.close()
