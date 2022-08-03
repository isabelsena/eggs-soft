from django.contrib import admin
from django.urls import path, include 

from django.conf.urls.static import static

# API Authentication
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from core import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/oauth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/oauth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/', include('apps.users.urls')),
    path('api/v1/', include('apps.api.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
