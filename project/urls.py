from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('benefits/', views.benefits),
    path('js-mini/', views.jsmini)
]