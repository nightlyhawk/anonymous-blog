from django.shortcuts import render
from textAPI.models import Complaint, Comment
from textAPI.serializers import ComplaintSerializer, CommentSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny

# Create your views here.


class ComplaintList(generics.ListCreateAPIView):
    queryset = Complaint.objects.all()
    serializer_class = ComplaintSerializer
    permission_classes = [AllowAny]


class ComplaintDetail(generics.RetrieveAPIView):
    queryset = Complaint.objects.all()
    serializer_class = ComplaintSerializer
    permission_classes = [AllowAny]


class PostDetail(generics.RetrieveDestroyAPIView):
    queryset = Complaint.objects.all()
    serializer_class = ComplaintSerializer


class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    permission_classes = [AllowAny]
    def comment(request, pk):
        eachComplaint = Complaint.objects.get(id=pk)
        serializer_class = CommentSerializer(instance=eachComplaint)
        if request.method == 'POST':
            serializer_class = CommentSerializer(instance=eachComplaint)
            if serializer.is_valid():
               serializer.save()
            
        return redirect('ComplaintList')


class CommentDetail(generics.RetrieveAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [AllowAny]


# def index{request}:
#     return render(request, 'frontend/build/index.html')
