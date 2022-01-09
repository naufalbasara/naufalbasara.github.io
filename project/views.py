from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
        'title': 'Projects'
    }
    return render(request, 'project/index.html', context)