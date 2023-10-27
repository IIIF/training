
import csv

with open('bl_examples.csv', newline='') as csvfile:
    data = csv.reader(csvfile)
    first=True
    for row in data:
        if not first:
            if row[0] and not row[1]:
                print (f'### {row[0]}')
            elif row[0] and row[1]: 
                print (f' * [{row[2]}]({row[0]}) - [manifest.json]({row[3]})')    
            else:
                print('')    
        else:
            first=False    
