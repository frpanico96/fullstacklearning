def greetings_function(*names):
    print('Welcome ' + str(names[0]) + '. You are '+ str(names[1]) + ' years old')

def add_numbers(num1, num2):
    return num1 + num2

name = 'John'#input('Enter your name: ')
age  = 34#input('Enter your age: ')
greetings_function(name, age)

num1 = int(input('Enter first number: '))
num2 = int(input('Enter second number: '))
print('The sum of two numbers are: ', add_numbers(num1, num2))