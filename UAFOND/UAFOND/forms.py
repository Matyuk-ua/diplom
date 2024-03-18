from django import forms
from .models import *

class News(forms.ModelForm):
    class Meta:
        model = News
        fields = ['title', 'author', 'text', 'img']

class Projects(forms.ModelForm):
    class Meta:
        model = Projects
        fields = ['title', 'author', 'text', 'img']
