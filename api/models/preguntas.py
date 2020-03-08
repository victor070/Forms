'''modelo preguntas'''

#django 
from django.db import models

#imports 

from .encuestas import Encuesta
class Pregunta (models.Model):

    encuesta = models.ForeignKey('Encuesta', on_delete=models.CASCADE, related_name='encuesta')
    preguntas = models.CharField(max_length=50)

    
    def __str__(self):
        return self.preguntas
    