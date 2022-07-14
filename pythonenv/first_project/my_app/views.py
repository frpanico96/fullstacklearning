import django
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Feature
from django.contrib.auth.models import User, auth
from django.contrib import messages

# Create your views here.

def index(request):

    features = Feature.objects.all()

    context = {
        'name': 'Mark',
        'age' : 23,
        'nationality' : 'British',
        'features': features
    }
    return render(request, 'index.html', context)

def counter(request):
    text = ''#request.POST['text']
    posts = [1, 2, 3, 4, 5, 'tim', 'tom', 'john']
    context = {
        'numberOfWords' : len(text.split()),
        'text': text,
        'posts': posts
    }
    return render(request, 'counter.html', context)


def register(request):
    if request.method == 'POST':
        username = request.POST["username"]
        email = request.POST["email"]
        password = request.POST["password"]
        pasword2 = request.POST["password2"]

        #Password check
        if password == pasword2:
            #Username Check
            if User.objects.filter(email= email).exists():
                messages.info(request, 'Email Already Used')
                return redirect('register')
            #Email Check
            elif User.objects.filter(username= username).exists():
                messages.info(request, 'Username Already Used')
                return redirect('register')
            elif username == '':
                return redirect('register')
            #Create User
            else:
                user = User.objects.create_user(username=username, email=email, password=password)
                user.save
                return redirect('login')
        else:
            messages.info(request, 'Passwords do not match')
            return redirect('register')
    else:
        return render(request, 'register.html')


def login(request):
    if request.method == 'POST':
        username = request.POST["username"]
        password = request.POST["password"]
        #Authenticate
        user = auth.authenticate(username=username, password=password)
        #Check if the user exists
        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            messages.info(request, 'Invalid Credentials')
            return redirect('login')
    else:
        return render(request, 'login.html')

def logout(request):
    auth.logout(request)
    return redirect('/')

def post(request, pk):
    return render(request, 'post.html', {'pk': pk})