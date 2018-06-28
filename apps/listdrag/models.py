# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

from mongoengine import *
connect('list_db')
# Create your models here.



class Post(EmbeddedDocument):
    content=StringField(default="test Text default")
    order=IntField(default=99)#order in the drag-drop list
    '''
    text=models.TextField() #text copeid from source
    source=models.TextField() #where you got it from
    interpretation=models.TextField() #in your own words
    purpose=models.TextField() # what you will use it for
    #owner=models.ForeignKey(List,related_name="inList")
    created_at=models.DateTimeField(auto_now_add=True)
    '''


class List(Document):
    created_at=DateTimeField(auto_now_add=True)
    posts=ListField(EmbeddedDocumentField(Post))
