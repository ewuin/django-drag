'''
from rest_framework import serializers
from .models import *

class ListSerializer (serializers.ModelSerializer):
    class Meta:
        model=List
        fields='__all__'

class PostSerializer (serializers.ModelSerializer):
    class Meta:
        model=Post
        fields='__all__'
'''
