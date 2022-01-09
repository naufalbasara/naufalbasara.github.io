from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
        'title': 'About',
    }
    return render(request, 'about/index.html', context)