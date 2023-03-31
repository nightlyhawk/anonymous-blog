from django.db import models
from django.utils import timezone
# Create your models here.


class Complaint(models.Model):

    # comment = models.ForeignKey('Comment', on_delete=models.CASCADE)
    title = models.CharField(max_length=225, default="")
    body = models.TextField()
    slug = models.SlugField(max_length=250, unique_for_date='published')
    number_of_comments = models.IntegerField(default=0)
    published = models.DateTimeField(default=timezone.now)
    # count = models.Count('Count', auto_now_add=True)

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.body


class Comment(models.Model):
    name = models.CharField(max_length=225)
    post_name = models.ForeignKey("Complaint",related_name="comments", on_delete=models.CASCADE)
    body = models.TextField()
    published = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return self.post_name, self.name
