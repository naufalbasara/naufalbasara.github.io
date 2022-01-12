from django.shortcuts import render
from django.http import Http404

def index(request):
    context = {
        'title': 'Home',
    }
    return render(request, 'index.html', context)
    
def contact(request):
    context = {
        'title': 'Contact',
    }
    return render(request, 'contact.html', context)

def page_not_found_view(request, exception):
    context = {
        'title': '404'
    }
    return render(request, '404.html', context, status=404)