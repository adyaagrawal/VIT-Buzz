
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('vitbuzz.urls',namespace='vitbuzz')),
    path('api/', include('vitbuzz_api.urls',namespace='vitbuzz_api')),
]
