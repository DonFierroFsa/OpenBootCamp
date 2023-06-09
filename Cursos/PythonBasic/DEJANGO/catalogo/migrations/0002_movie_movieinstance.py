# Generated by Django 4.2.1 on 2023-05-18 15:21

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('catalogo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('summary', models.TextField(help_text='Reseña de la pelicula', max_length=500)),
                ('director', models.ForeignKey(max_length=255, null=True, on_delete=django.db.models.deletion.SET_NULL, to='catalogo.directores')),
            ],
        ),
        migrations.CreateModel(
            name='MovieInstance',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, help_text='Id unico para esta pelicula', primary_key=True, serialize=False)),
                ('due_back', models.DateField(blank=True, null=True)),
                ('status', models.CharField(blank=True, choices=[('VG', 'Muy Buena'), ('G', 'Buena'), ('R', 'Regular'), ('B', 'Mala'), ('VB', 'Muy Mala')], default='R', help_text='Calificacion de la pelicula', max_length=2)),
                ('movie', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='catalogo.movie')),
            ],
            options={
                'ordering': ['due_back'],
            },
        ),
    ]
