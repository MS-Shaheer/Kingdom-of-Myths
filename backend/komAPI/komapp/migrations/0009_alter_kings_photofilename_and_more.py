# Generated by Django 4.1.2 on 2023-05-15 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('komapp', '0008_kings_photofilename_magicians_photofilename_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kings',
            name='photoFilename',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='magicians',
            name='photoFilename',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='superheroes',
            name='photoFilename',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='town',
            name='photoFilename',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='villians',
            name='photoFilename',
            field=models.CharField(max_length=100),
        ),
    ]