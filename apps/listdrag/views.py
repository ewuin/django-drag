# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Post, List
from django.http import HttpResponse, HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.core import serializers
from django.http import JsonResponse
import json

# Create your views here.
'''
class ListCreate (generics.ListCreateAPIView):
    queryset=db.List.find()
    serializer_class=ListSerializer

class PostCreate (generics.ListCreateAPIView):
    queryset=db.Post.find()
    serializer_class=PostSerializer
'''

def index(req):
    print Post

    return HttpResponse({"hello world":"world"})

def testCreate(req):
    post1=Post(content="test content text 1",order=66)
    post2=Post()
    testList= List(posts=[post1,post2]).save()
    print testList
    return HttpResponse({"created test post"})

def getLists(req):
    print "react requesting all lists"
    #allLists=List.objects.all()

    data=[
        {
            "model": "leads.lead",
            "pk": 1,
            "name": "Armin",
            "email": "something@gmail.com",
            "message": "I am looking for a Javascript mentor",
            "created_at": "2018-02-14 00:00:00"
            }
        ,
        {
            "model": "leads.lead",
            "pk": 2,
            "name": "Tom",
            "email": "tomsomething@gmail.com",
            "message": "I want to talk about a Python project",
            "created_at": "2018-01-14 00:00:00"
            },
        {
            "model": "leads.lead",
            "pk": 3,
            "name": "Armin",
            "email": "something@gmail.com",
            "message": "I am looking for a Javascript mentor",
            "created_at": "2018-02-14 00:00:00"
            }
        ,
        {
            "model": "leads.lead",
            "pk": 4,
            "name": "Tom",
            "email": "tomsomething@gmail.com",
            "message": "I want to talk about a Python project",
            "created_at": "2018-01-14 00:00:00"
            },

        {
            "model": "leads.lead",
            "pk": 5,
            "name": "Armin",
            "email": "something@gmail.com",
            "message": "I am looking for a Javascript mentor",
            "created_at": "2018-02-14 00:00:00"
            }
        ,
        {
            "model": "leads.lead",
            "pk": 6,
            "name": "Tom",
            "email": "tomsomething@gmail.com",
            "message": "I want to talk about a Python project",
            "created_at": "2018-01-14 00:00:00"
            }
    ]
    #data_final=serializers.serialize("json",data[0])
    backup_data=[{"key1":"fake","key2":"also"}]
    return JsonResponse(data,safe=False)#[2]['posts'][0]['content'])
