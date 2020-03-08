'''modelo encuesta'''

#django 
from django.db import models


#import 
from .profile import Profile


class Encuesta(models.Model):

    profile = models.ForeignKey('Profile', on_delete=models.CASCADE)
    nombreEncuesta = models.CharField(max_length=50)
    descripcionEncuentas= models.TextField()
    
    def __str__(self):
        return self.nombreEncuesta
    
    
    
   