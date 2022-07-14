#While loop
i = 1
while (i < 6 or i == 6):
    print(i)
    i += 1


#For loop
for letter in 'Hello':
    print(letter)

my_list = ['ji', 'ju', 'jo']
for element in my_list:
    print('Element: ' + element)
    for letter in element:
        print('Spelling: ' + letter)


my_dict = { 'name' : 'John', 'age': 13}
for values in my_dict:
    print('Key: ' + str(values) + ' Value: ' + str(my_dict[values]))

for x in range(4):
    print(x)
else:
    print('Finished looping')


#2D List
my_2d_list = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

print('Element 1 1 is: ' + str(my_2d_list[1][1]))
for list in my_2d_list:
    for element in list:
        print(str(element))