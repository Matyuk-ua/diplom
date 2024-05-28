from django.shortcuts import render, get_object_or_404
from .models import Projects
from .models import News
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

def artcl(request, id):
    article = get_object_or_404(News, id=id)
    return render(request, 'artcl.html', {'article': article})

def projects(request):
    projects = Projects.objects.all().order_by("-id")
    return render(request, 'projects.html', {'projects': projects})

def arch_projects(request):
    projects = Projects.objects.all().order_by("-id")
    return render(request, 'projects_arcived_only.html', {'projects': projects})

def act_projects(request):
    projects = Projects.objects.all().order_by("-id")
    return render(request, 'projects_actived_only.html', {'projects': projects})

def proj(request, id):
    project = get_object_or_404(Projects, id=id)
    return render(request, 'proj.html', {'project': project})

def report(request):
    return render(request, 'report.html')

def support(request):
    return render(request, 'support.html')

def support_project(request, id):
    project = get_object_or_404(Projects, id=id)
    return render(request, 'support.html', {'project': project})