# API URLS
from rest_framework import routers
from apps.users import viewsets as user_viewsets
from apps.egg import viewsets as egg_viewsets
from django.urls import re_path, include

router = routers.DefaultRouter()

# Register all API Viewsets
router.register(r'profile', user_viewsets.UserViewSet)
router.register(r'product', egg_viewsets.ProductViewSet)

urlpatterns = [
    re_path(r'^', include(router.urls)),
]
