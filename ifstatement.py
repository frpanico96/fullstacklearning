# IF Statement tutorial
a = 4
b = 3

if a > b:
    print(str(a) + ' is greater than ' + str(b))
elif a < b:
    print(str(b) + ' is greater than ' + str(b))
else:
    print(str(a) + ' is equal to ' + str(b))

#It can be done with strings

c = 'Tim'
d = 'Tim'

if c == d:
    print(c + ' is equal to ' + d)

#Or booleans

e = True
f = False

if e != f:
    print(str(e) + ' is not equal to ' + str(f))

#OR logical operator

short = True
long = False

if short or long != True:
    print('Not Long')


#AND logical operator

brown_hair = True
brown_eyes = True

if brown_eyes and brown_hair:
    print('Brown')


#Input Validation
value = input('Input a value: ')
if type(value) == str:
    print(value + ' is a string')
# elif type(value) == int:
#     print(value + ' is an int')
# elif type(value) == list:
#     print(value + ' is a list')
else:
    print('We don\'t know the value')


#Check if a number is divisible by 5
input_int = int(input('Input a number: '))

if input_int%5 == 0:
    print(str(input_int) + ' is divisible by 5')
else:
    print(str(input_int) + ' is not divisible by 5')


#Check the length of a sentence is less than 10

input_str = input('Input a sentence: ')

if len(input_str) > 10:
    print(input_str + ' is bigger than 10')
else:
    print(input_str + ' is not bigger than 10')

#Check if a number is an even number

number = int(input('Enter a number to check weather it\'s even or odd: '))
if number%2 == 0:
    print('Even number')
else:
    print('Odd Number')