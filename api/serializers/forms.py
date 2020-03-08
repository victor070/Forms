from rest_framework import serializers
from api.models import Encuesta, Pregunta, Respuesta


        
class EncuestaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Encuesta
        fields ='__all__'

class PreguntaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pregunta
        fields ='__all__'
        
           
        
class RespuestaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Respuesta
        fields = '__all__'
        depth = 2


        