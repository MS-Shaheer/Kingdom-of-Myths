from rest_framework import serializers
from komapp.models import SuperHeroes, Villians, Magicians, Kings, Town

class SuperHeroesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SuperHeroes
        fields = ('superheroID',
                 'superheroName',
                 'dob',
                 'age',
                 'strength',
                 'weakness',
                 'totalFollowers',
                 'totalVictories',
                 'description',
                 'photoFilename')

class VilliansSerializer(serializers.ModelSerializer):
    class Meta:
        model = Villians
        fields = ('villianID',
                 'villianName',
                 'dob',
                 'age',
                 'strength',
                 'weakness',
                 'totalFollowers',
                 'totalVictories',
                 'description',
                 'photoFilename')

class MagiciansSerializer(serializers.ModelSerializer):
    class Meta:
        model = Magicians
        fields = ('magicianID',
                 'magicianName',
                 'dob',
                 'age',
                 'magics',
                 'description',
                 'photoFilename')

class KingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kings
        fields = ('kingID',
                 'kingName',
                 'dob',
                 'age',
                 'armyNumbers',
                 'totalLand',
                 'description',
                 'photoFilename')

class TownSerializer(serializers.ModelSerializer):
    class Meta:
        model = Town
        fields = ('townID',
                 'townName',
                 'population',
                 'kingName',
                 'mainResource',
                 'description',
                 'photoFilename')
