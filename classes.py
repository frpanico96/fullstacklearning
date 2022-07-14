from pythonfile import Person2

class My_Class:
    x = 5

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p1 = My_Class()
print(p1.x)

name = input("Enter your name: ")
age = int(input("Enter your age: "))
p2 = Person(name, age)
print(p2.name + ' ' + str(p2.age))


class Student(Person2):
    pass

p1 = Student()
print(p1.name)



