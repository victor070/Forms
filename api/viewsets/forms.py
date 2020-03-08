from rest_framework import viewsets, mixins, status
from django.views.generic import ListView, DetailView
from rest_framework.response import Response
from rest_framework.decorators import action
from api.models import Encuesta, Pregunta , Respuesta
from api.serializers import EncuestaSerializer, PreguntaSerializer , RespuestaSerializer
from django.db.models import Avg, Max, Min, Sum

class EncuestaViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, 
viewsets.GenericViewSet         
                                                    ):
    queryset= Encuesta.objects.all()
    serializer_class = EncuestaSerializer 


class PreguntaViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, 
viewsets.GenericViewSet         
                                                    ):
    queryset= Pregunta.objects.all()
    serializer_class = PreguntaSerializer 


class RespuestaViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, 
viewsets.GenericViewSet        
                                                    ):
    queryset= Respuesta.objects.all()
    serializer_class = RespuestaSerializer 
    

    @action(detail=False, methods=['get'])
    def promedio(self, request, *args, **kwargs):

        promedio = Respuesta.objects.all().aggregate(Avg('respuesta'))
         

        return Response(data=promedio)
    
    

