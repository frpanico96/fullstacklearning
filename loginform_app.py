from loginform_db import User,Database
### This function allows to enter
### an hidden password
from getpass import getpass

###Initialize database
db = Database()
###User inputs
### It asks if the user is already logged in or need to be registered
### 0 - log in
### 1 - register
print("################")
print("Welcome to ftb.com")
print("Press 0 if you are already registerd")
print("Press 1 to sign up")
print("################")
action = int(input())

if(action == 0):
    print("### SIGN UP ###")
else:
    print("### SIGN IN ###")

username = input("Username: ")
password = getpass("Password: ")


for line in db.file:
    db.firstAccount(action, username, password)
    credentials = line.split()
    if(credentials[0] == "Username"):
        continue
    db.checkLogin(action, credentials, username, password)


db.openFile.close()