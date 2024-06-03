from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404, render
from decimal import Decimal
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__) 
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
    projects = Projects.objects.all()
    return render(request, 'report.html', {'projects': projects})

def support(request):
    projects = Projects.objects.all().order_by("-id")
    return render(request, 'support.html', {'projects': projects})

def support_project(request, id):
    project = get_object_or_404(Projects, id=id)
    
    if request.method == 'POST':
        amount = request.POST.get('amount')
        logger.info(f"Received amount: {amount}")
        try:
            amount = Decimal(amount)
            logger.info(f"Converted amount: {amount}")
            project.coll_money += amount
            project.save()
            return JsonResponse({'new_coll_money': project.coll_money})
        except (ValueError):
            logger.error(f"Invalid amount value: {amount}")
            return JsonResponse({'error': 'Invalid amount'}, status=400)
    else:
        return render(request, 'support.html', {'project': project})

