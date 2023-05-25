from django.urls import re_path
from komapp import views
from django.conf.urls.static import static
# from django.conf import settings
from komAPI.settings import MEDIA_ROOT, MEDIA_URLS

urlpatterns = [
    re_path(r'^superhero/$', views.superheroesAPI),
    re_path(r'^superhero/([0-9]+)$', views.superheroesAPI),

    re_path(r'^villian/$', views.villiansAPI),
    re_path(r'^villian/([0-9]+)$', views.villiansAPI),

    re_path(r'^magician/$', views.magiciansAPI),
    re_path(r'^magician/([0-9]+)$', views.magiciansAPI),

    re_path(r'^king/$', views.kingsAPI),
    # re_path(r'^king/<int:kingID>', views.get_king, name='get_king'),
    re_path(r'^king/([0-9]+)$', views.kingsAPI),

    re_path(r'^town/$', views.townsAPI),
    re_path(r'^town/([0-9]+)$', views.townsAPI),

    re_path(r'^SaveFile$', views.SaveFile)

# ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
]  + static(MEDIA_URLS, document_root=MEDIA_ROOT)
