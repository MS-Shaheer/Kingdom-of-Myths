# Generated by Django 4.1.2 on 2023-05-10 07:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('komapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='town',
            name='townName',
            field=models.CharField(default='XYZtown', max_length=50),
        ),
    ]
