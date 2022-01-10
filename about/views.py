from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
        'title': 'About',
        'img': 'img/Naufal_Basara.png'
    }
    return render(request, 'about/index.html', context)