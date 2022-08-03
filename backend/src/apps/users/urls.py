"""
    Urls
"""

# From django
from django.urls import path

# From local
from . import views, viewsets


urlpatterns = [
    path('register/', views.RegisterGeneric.as_view(), name='register'),
    path('current_user/', views.CurrentUserView.as_view(), name='current_user')
]
