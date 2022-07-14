class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password

class Database:
    fileLen = 0
    file = ''
    openFile = ''
    def __init__(self):
        self.openFile = open('loginform_database.txt','a+')
        ### When a file is opened in a+ mode
        ### It does not start at line 0
        ### the seek method allows to set the
        ### start of reading at the real start of the file
        self.openFile.seek(0)
        ### doing the len() > 0 in the if statement
        ### Does not work for python
        ### To be investigated
        self.file = self.openFile.readlines()
        self.fileLen = len(self.file)
        if self.fileLen > 0:
            return
        else:
            self.openFile.write('Username\t\tPassword')
            print("Database initialized close restart the program")
            exit()
    
    def firstAccount(self, action, username, password):
        if self.fileLen == 1:
            if(action == 1):
                print("Account not found. Try signing up")
                exit()
            if(action == 0):
                self.openFile.write('\n'+username + ' ' + password)
                print("Succesfully registered")
                exit()

    def checkLogin(self, action, credentials, username, password):
            if(credentials[0] == username):
                if(action == 0):
                    print("Account already exists try logging in")
                    exit()
                elif(action == 1 and credentials[1] == password):
                    print("Succesfully logged in")
                    exit()
            else:
                if(action == 1):
                    print("Account not found. Try signing up")
                    exit()
                else:
                    self.openFile.write('\n' + username + ' ' + password)
                    print("Succesfully registered")
                    exit()
        

