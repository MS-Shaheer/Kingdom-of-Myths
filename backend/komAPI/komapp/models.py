from django.db import models

# Create your models here.

class SuperHeroes(models.Model):
    superheroID = models.AutoField(primary_key=True)
    superheroName = models.CharField(max_length=50 ,null=False)
    dob = models.DateField(null=False)
    age = models.IntegerField(null=False)
    strength = models.CharField(max_length=50, null=False)
    weakness = models.CharField(max_length=50, null=True)
    totalFollowers = models.IntegerField()
    totalVictories = models.IntegerField()
    description = models.CharField(max_length=5000, null=False, default='')
    photoFilename = models.CharField(max_length=100)

class Magicians(models.Model):
    magicianID = models.AutoField(primary_key=True)
    magicianName = models.CharField(max_length=50, null=True)
    dob = models.DateField(null=False)
    age = models.IntegerField(null=False)
    magics = models.CharField(max_length=50)
    description = models.CharField(max_length=5000, null=False, default='')
    photoFilename = models.CharField(max_length=100)

class Villians(models.Model):
    villianID = models.AutoField(primary_key=True)
    villianName = models.CharField(max_length=50 ,null=False)
    dob = models.DateField(null=False)
    age = models.IntegerField(null=False)
    strength = models.CharField(max_length=50, null=False)
    weakness = models.CharField(max_length=50, null=True)
    totalFollowers = models.IntegerField()
    totalVictories = models.IntegerField()
    description = models.CharField(max_length=5000, null=False, default='')
    photoFilename = models.CharField(max_length=100)

class Kings(models.Model):
    kingID = models.AutoField(primary_key=True)
    kingName = models.CharField(max_length=50, null=False)
    dob = models.DateField(null=False)
    age = models.IntegerField(null=False)
    armyNumbers = models.IntegerField()
    totalLand = models.CharField(max_length=25)
    description = models.CharField(max_length=5000, null=False, default='')
    photoFilename = models.CharField(max_length=100)
    # picture = models.ImageField(upload_to='kings/', null=True)

class Town(models.Model):
    townID = models.AutoField(primary_key=True)
    townName = models.CharField(max_length=50, null=False, default='XYZTown')
    population = models.IntegerField()
    # kingName = models.ForeignKey("app.Model", verbose_name=_(""), on_delete=models.CASCADE)(null=False)
    kingName = models.CharField(max_length=50, null=False)
    mainResource = models.CharField(max_length=25, null=True)
    description = models.CharField(max_length=5000, null=False, default='')
    photoFilename = models.CharField(max_length=100)
