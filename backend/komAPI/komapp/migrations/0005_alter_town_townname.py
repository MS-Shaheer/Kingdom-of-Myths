# Generated by Django 4.1.2 on 2023-05-13 08:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('komapp', '0004_kings_description_magicians_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='town',
            name='townName',
            field=models.CharField(default='XYZTown', max_length=50),
        ),
    ]