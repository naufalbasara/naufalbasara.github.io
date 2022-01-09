from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    context = {
        'title': 'Home',
        'img': 'img/Naufal_Basara.png'
    }
    return render(request, 'index.html', context)
    
def contact(request):
    context = {
        'title': 'Contact',
    }
    return render(request, 'contact.html', context)