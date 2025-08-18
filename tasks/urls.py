from django.urls import include, path
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from tasks import views
from tasks.user_views import RegisterView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


router = routers.DefaultRouter()
router.register(r'tasks', views.TaskViewSet, 'tasks')


urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('api/v1/auth/register/', RegisterView.as_view(), name='register'),
    path('api/v1/auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]


