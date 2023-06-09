# Generated by Django 4.1.2 on 2023-05-10 07:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Kings',
            fields=[
                ('kingID', models.AutoField(primary_key=True, serialize=False)),
                ('kingName', models.CharField(max_length=50)),
                ('dob', models.DateField()),
                ('age', models.IntegerField()),
                ('armyNumbers', models.IntegerField()),
                ('totalLand', models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='Magicians',
            fields=[
                ('magicianID', models.AutoField(primary_key=True, serialize=False)),
                ('magicianName', models.CharField(max_length=50, null=True)),
                ('dob', models.DateField()),
                ('age', models.IntegerField()),
                ('magics', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='SuperHeroes',
            fields=[
                ('superheroID', models.AutoField(primary_key=True, serialize=False)),
                ('superheroName', models.CharField(max_length=50)),
                ('dob', models.DateField()),
                ('age', models.IntegerField()),
                ('strength', models.CharField(max_length=50)),
                ('weakness', models.CharField(max_length=50, null=True)),
                ('totalFollowers', models.IntegerField()),
                ('totalVictories', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Town',
            fields=[
                ('townID', models.AutoField(primary_key=True, serialize=False)),
                ('population', models.IntegerField()),
                ('kingName', models.CharField(max_length=50)),
                ('mainResource', models.CharField(max_length=25, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Villians',
            fields=[
                ('villianID', models.AutoField(primary_key=True, serialize=False)),
                ('villianName', models.CharField(max_length=50)),
                ('dob', models.DateField()),
                ('age', models.IntegerField()),
                ('strength', models.CharField(max_length=50)),
                ('weakness', models.CharField(max_length=50, null=True)),
                ('totalFollowers', models.IntegerField()),
                ('totalVictories', models.IntegerField()),
            ],
        ),
    ]
