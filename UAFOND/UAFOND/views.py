from django.shortcuts import render
from .models import *

def main(request):
    projects = Projects.objects.all().order_by("-id")
    news = News.objects.all().order_by("-id")
    return render(request, 'main.html', {'projects': projects, 'news': news})

def about(request):
    return render(request, 'about.html')

def news(request):
    news = News.objects.all().order_by("-id")
    return render(request, 'news.html', {'news': news})

def projects(request):
    projects = Projects.objects.all().order_by("-id")
    return render(request, 'projects.html', {'projects': projects})

def report(request):
    return render(request, 'report.html')

def support(request):
    return render(request, 'support.html')