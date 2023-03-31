from rest_framework import serializers
from textAPI.models import Complaint, Comment


class ComplaintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Complaint
        fields = ('id', 'title',
                  'body', 'number_of_comments', 'published')


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'name', 'body', 'published')
