from django.contrib import admin

# Register your models here.
from .models import *

#Registro los modelos en mi panel de administracion
admin.site.register(Directores)
admin.site.register(Movie)
admin.site.register(MovieInstance)