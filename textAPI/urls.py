from django.urls import path
from .views import ComplaintList, ComplaintDetail, CommentList, CommentDetail


app_name = 'textAPI'

urlpatterns = [
    path('complaints/', ComplaintList.as_view(), name='listcreate'),
    path('complaint/<int:pk>/', ComplaintDetail.as_view(), name='retrievedetail'),
    path('comments?complaints_id={complaints_id}/',
         CommentList.as_view(), name='listcreate'),
     path('complaint/<int:pk>/comments', CommentList.as_view(), name='listcreate'),
    path('comment/<int:pk>/', CommentDetail.as_view(), name='retrievedetail'),
]
