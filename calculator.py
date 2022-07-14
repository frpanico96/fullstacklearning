from decimal import Decimal, InvalidOperation
from xml.dom import ValidationErr

###Input Function###
###Handler input errors###
def user_input(input_message):
    try:
        number = Decimal(input(input_message))
        return number
    except InvalidOperation:
        print("Input Error: The input must be a number!")
        exit()
###    else:
###        print("Correct Input")
###    finally:
###        print('Finally')

print("############################")
print("Welcome to Python Basic operator")
print("Enter first number, second number and the operator")
print("Allowed opertors are: \"+\" (addition), \"-\" (subtraction), \"*\" (multiplication), \"/\" (division)")
print("############################")

first_number = user_input("Enter first number: ")
second_number = user_input("Enter second number: ")
operator = input("Enter the operator: ")


if operator == "+":
    print(first_number + second_number)
elif operator == "-":
    print(first_number - second_number)
elif operator == "*":
    print(first_number * second_number)
elif operator == "/":
    print(first_number/second_number)
else:
    print("Invalid operator restart the program")