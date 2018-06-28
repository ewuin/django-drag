from django.conf.urls import url
from . import views           # This line is new!


urlpatterns = [
    #url(r'^$',views.index,name="index"),
    url(r'^test1$',views.testCreate),
    url(r'^api/lists/',views.getLists)
    #path('api/list/',views.ListCreate.as_view()),
    ]
