import uuid

from django.db import models
from django.db.models import ForeignKey


# Create your models here.

class Directores(models.Model):
    nombre = models.CharField(max_length=255, help_text="Pon el nombre del director")

    def __str__(self):
        return self.nombre

    # class ISBN (models.Model):
    pass


class Movie(models.Model):
    title = models.CharField(max_length=255)
    director = models.ForeignKey('Directores', max_length=255, on_delete=models.SET_NULL, null=True)
    summary = models.TextField(max_length=2500, help_text="Reseña de la pelicula")

    # isbn = models.ForeignKey('ISBN', max_length=13, help_text="isbn de 13 caracteres")
    # genero = models.ManyToManyField('Genero')

    def __str__(self):
        return f"{self.title}, {self.director}, {self.summary}"


class MovieInstance(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text="Id unico para esta pelicula")
    movie = models.ForeignKey("Movie", on_delete=models.SET_NULL, null=True)
    fecha_visualizacion = models.DateField(null=True, blank=True)

    View_Status = (
        ("VG", "Muy Buena"),
        ("G", "Buena"),
        ("R", "Regular"),
        ("B", "Mala"),
        ("VB", "Muy Mala")
    )
    status = models.CharField(max_length=2, choices=View_Status, blank=True, help_text="Calificacion de la pelicula",
                              default="R")
    class Meta:
        ordering=["fecha_visualizacion"]

    def __str__(self):
        return f"{self.id}, {self.movie}, {self.status}"
