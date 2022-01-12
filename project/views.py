from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
        'title': 'Projects'
    }
    return render(request, 'project/index.html', context)
def benefits(request):
    context = {
        'img1': 'img/benefits/benefits.png',
        'img2': 'img/benefits/benefits-dashboard.png',
        'img3': 'img/benefits/benefits-view.png',
        'title': 'BENEFITS Database App',
        'duration': '7 - 12 days',
        'timeFinished': '24 December 2021',
        'description': 'Database web application use to ease the administration process of Tangerang regional forum.',
        'explanation': 'BENEFITS database web application developed in order to ease the administration process of ITS Tangerang regional forum. In this website, users who mainly are BENEFITS administrator expected to maintain member data. Tech stack used in this project are Laravel (PHP Framework) and MySQL for the backend, while i used Bootstrap template for the display of the website.',
        'goals': 'Project main objective is to ease the administration process of ITS Tangerang regional forum. In this website, users who mainly are BENEFITS administrator expected to maintain member data. For example, add, delete, and edit data of BENEFITS member. Users with certain user view (Treasury) may supervised cash flow with highlighted data in the web.',
        'repository': 'https://github.com/naufalbasara/benefits-web-app',
        'site': 'https://benefits-web-app.herokuapp.com/',
    }
    return render(request, 'project/template.html', context)