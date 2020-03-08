'''modelo preguntas'''

#django 
from django.db import models

#imports 
from .preguntas import Pregunta

class Respuesta (models.Model):

    pregunta = models.OneToOneField('Pregunta', on_delete=models.CASCADE)
    respuesta = models.PositiveIntegerField()

    
    def __str__(self):
        return str(self.respuesta)
    

   

