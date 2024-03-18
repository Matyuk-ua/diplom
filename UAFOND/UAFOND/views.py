from django.shortcuts import render
from .models import *

def main(request):
    projects = Projects.objects.all().order_by("-id")
    return render(request, 'main.html', {'projects': projects})