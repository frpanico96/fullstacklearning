input_file = open('input.txt', 'r')
print(input_file.readable())
print(input_file.readline())

##print(input_file.readlines())

for line in input_file.readlines():
    print(line)

input_file.close()


write_file = open('input.txt','w')
write_file.write('Writing the file')


write_file.close()


new_file = open('newfile.txt', 'w')
new_file.write('This is a new file')
new_file.close()

append_file = open('newfile.txt','a')
append_file.write('\nAppending a line')
append_file.close()

python_file = open('pythonfile.py','w')
python_file.write('print(\'This is a new file\')')
python_file.close()