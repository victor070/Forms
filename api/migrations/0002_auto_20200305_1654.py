# Generated by Django 2.2.9 on 2020-03-05 16:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pregunta',
            name='encuesta',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='encuesta_pregunta', to='api.Encuesta'),
        ),
        migrations.AlterField(
            model_name='respuesta',
            name='pregunta',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='pregunta_respuesta', to='api.Pregunta'),
        ),
    ]
