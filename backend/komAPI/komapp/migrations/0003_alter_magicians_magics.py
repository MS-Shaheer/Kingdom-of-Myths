# Generated by Django 4.1.2 on 2023-05-12 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('komapp', '0002_town_townname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='magicians',
            name='magics',
            field=models.CharField(max_length=50),
        ),
    ]