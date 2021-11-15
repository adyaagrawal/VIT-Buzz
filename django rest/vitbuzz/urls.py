from django.urls import path
from django.views.generic import TemplateView

app_name = 'vitbuzz'

urlpatterns = [
    path('', TemplateView.as_view(template_name="vitbuzz/index.html")),
]