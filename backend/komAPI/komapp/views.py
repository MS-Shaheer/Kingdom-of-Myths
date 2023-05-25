from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
from rest_framework.parsers import JSONParser

from komapp.models import *
from komapp.serializers import *

# Create your views here.

@csrf_exempt
def superheroesAPI(request, id=0):
    if request.method == 'GET':
        if id:
            try:
                superhero = SuperHeroes.objects.get(superheroID=id)
                superhero_serialized = SuperHeroesSerializer(superhero)
                return JsonResponse(superhero_serialized.data)
            except SuperHeroes.DoesNotExist:
                return JsonResponse({'error': 'Superheroes not found'}, status=404)
        else:
            superheroes = SuperHeroes.objects.all()
            superheroes_serialized = SuperHeroesSerializer(superheroes, many=True)
            return JsonResponse(superheroes_serialized.data, safe=False)
    
    elif request.method == 'POST':
        superhero_data = JSONParser().parse(request)
        superhero_serialized = SuperHeroesSerializer(data=superhero_data)
        if superhero_serialized.is_valid():
            superhero_serialized.save()
            return JsonResponse("Superhero Added Successfully !", safe=False)
        else: 
            return JsonResponse("Failed to add Superhero !", safe=False)
    
    elif request.method == 'PUT':
        superhero_data = JSONParser().parse(request)
        superhero = SuperHeroes.objects.get(superheroID = superhero_data['superheroID'])
        superhero_serialized = SuperHeroesSerializer(superhero, data=superhero_data)
        if superhero_serialized.is_valid():
            superhero_serialized.save()
            return JsonResponse("Superhero Updated Successfully !", safe=False)
        else:
            return JsonResponse("Fail to update Superhero !", safe=False)
    
    elif request.method == 'DELETE':
        superhero = SuperHeroes.objects.get(superheroID = id)
        superhero.delete()
        return JsonResponse("Superhero Deleted !", safe=False)

@csrf_exempt
def villiansAPI(request, id=0):
    if request.method == 'GET':
        if id:
            try:
                villian = Villians.objects.get(villianID=id)
                villian_serialized = VilliansSerializer(villian)
                return JsonResponse(villian_serialized.data)
            except Villians.DoesNotExist:
                return JsonResponse({'error': 'Villian not found'}, status=404)
        else:
            villians = Villians.objects.all()
            villians_serialized = VilliansSerializer(villians, many=True)
            return JsonResponse(villians_serialized.data, safe=False)
    
    elif request.method == 'POST':
        villian_data = JSONParser().parse(request)
        villian_serialized = VilliansSerializer(data=villian_data)
        if villian_serialized.is_valid():
            villian_serialized.save()
            return JsonResponse("Villian Added Successfully !", safe=False)
        else: 
            return JsonResponse("Failed to add Villian !", safe=False)
    
    elif request.method == 'PUT':
        villian_data = JSONParser().parse(request)
        villian = Villians.objects.get(villianID = villian_data['villianID'])
        villian_serialized = VilliansSerializer(villian, data=villian_data)
        if villian_serialized.is_valid():
            villian_serialized.save()
            return JsonResponse("Villian Updated Successfully !", safe=False)
        else:
            return JsonResponse("Fail to update Villian !", safe=False)
    
    elif request.method == 'DELETE':
        villian = Villians.objects.get(villianID = id)
        villian.delete()
        return JsonResponse("Villian Deleted !", safe=False)

@csrf_exempt
def magiciansAPI(request, id=0):
    if request.method == 'GET':
        if id:
            try:
                magician = Magicians.objects.get(magicianID=id)
                magician_serialized = MagiciansSerializer(magician)
                return JsonResponse(magician_serialized.data)
            except Magicians.DoesNotExist:
                return JsonResponse({'error': 'Magician not found'}, status=404)
        else:
            magicians = Magicians.objects.all()
            magicians_serialized = MagiciansSerializer(magicians, many=True)
            return JsonResponse(magicians_serialized.data, safe=False)
    
    elif request.method == 'POST':
        magician_data = JSONParser().parse(request)
        magician_serialized = MagiciansSerializer(data=magician_data)
        if magician_serialized.is_valid():
            magician_serialized.save()
            return JsonResponse("Magician Added Successfully !", safe=False)
        else: 
            return JsonResponse("Failed to add Magician !", safe=False)
    
    elif request.method == 'PUT':
        magician_data = JSONParser().parse(request)
        magician = Magicians.objects.get(magicianID = magician_data['magicianID'])
        magician_serialized = MagiciansSerializer(magician, data=magician_data)
        if magician_serialized.is_valid():
            magician_serialized.save()
            return JsonResponse("Magician Updated Successfully !", safe=False)
        else:
            return JsonResponse("Fail to update Magician !", safe=False)
    
    elif request.method == 'DELETE':
        magician = Magicians.objects.get(magicianID = id)
        magician.delete()
        return JsonResponse("Magician Deleted !", safe=False)

@csrf_exempt
def kingsAPI(request, id=0):
    if request.method == 'GET':
        # kings = Kings.objects.all()
        # kings_serialized = KingsSerializer(kings, many=True)
        # return JsonResponse(kings_serialized.data, safe=False)
        if id:
            try:
                king = Kings.objects.get(kingID=id)
                king_serialized = KingsSerializer(king)
                return JsonResponse(king_serialized.data)
            except Kings.DoesNotExist:
                return JsonResponse({'error': 'King not found'}, status=404)
        else:
            kings = Kings.objects.all()
            kings_serialized = KingsSerializer(kings, many=True)
            return JsonResponse(kings_serialized.data, safe=False)
    
    elif request.method == 'POST':
        king_data = JSONParser().parse(request)
        king_serialized = KingsSerializer(data=king_data)
        if king_serialized.is_valid():
            king_serialized.save()
            return JsonResponse("King Added Successfully !", safe=False)
        else:
            print(king_serialized.error)
            return JsonResponse("Failed to add King !", safe=False)
    
    elif request.method == 'PUT':
        king_data = JSONParser().parse(request)
        king = Kings.objects.get(kingID = king_data['kingID'])
        king_serialized = KingsSerializer(king, data=king_data)
        if king_serialized.is_valid():
            king_serialized.save()
            return JsonResponse("King Updated Successfully !", safe=False)
        else:
            return JsonResponse("Fail to update King !", safe=False)
    
    elif request.method == 'DELETE':
        king = Kings.objects.get(kingID = id)
        king.delete()
        return JsonResponse("King Deleted !", safe=False)

# @csrf_exempt
# def get_king(request, id):
#     try:
#         king_data = JSONParser().parse(request)
#         king = Kings.objects.get(kingID=king_data['kingID'])
#         king_serialized = KingsSerializer(king)
#         return JsonResponse(king_serialized.data)
#     except Kings.DoesNotExist:
#         return JsonResponse({'error': 'King not found'}, status=404)

@csrf_exempt
def townsAPI(request, id=0):
    if request.method == 'GET':
        if id:
            try:
                town = Town.objects.get(townID=id)
                town_serialized = TownSerializer(town)
                return JsonResponse(town_serialized.data)
            except Town.DoesNotExist:
                return JsonResponse({'error': 'Town not found'}, status=404)
        else:
            towns = Town.objects.all()
            towns_serialized = TownSerializer(towns, many=True)
            return JsonResponse(towns_serialized.data, safe=False)
    
    elif request.method == 'POST':
        town_data = JSONParser().parse(request)
        town_serialized = TownSerializer(data=town_data)
        if town_serialized.is_valid():
            town_serialized.save()
            return JsonResponse("Town Added Successfully !", safe=False)
        else: 
            return JsonResponse("Failed to add Town !", safe=False)
    
    elif request.method == 'PUT':
        town_data = JSONParser().parse(request)
        town = Town.objects.get(townID = town_data['townID'])
        town_serialized = TownSerializer(town, data=town_data)
        if town_serialized.is_valid():
            town_serialized.save()
            return JsonResponse("Town Updated Successfully !", safe=False)
        else:
            return JsonResponse("Fail to update Town !", safe=False)
    
    elif request.method == 'DELETE':
        town = Town.objects.get(townID = id)
        town.delete()
        return JsonResponse("Town Deleted !", safe=False)

# @csrf_exempt
# def SaveFile(request):
#     file = request.FILES['uploadedFile']
#     filename = default_storage.save(file.name, file)

#     return JsonResponse(filename, safe=False)

# @csrf_exempt
# def SaveFile(request):
#     file = request.FILES['uploadedFile']
#     filename = default_storage.save(file.name, file)

#     return JsonResponse(filename, safe=False)

@csrf_exempt
def SaveFile(request):
    file = request.FILES['uploadedFile']
    filename = default_storage.save(file.name, file)

    return JsonResponse(filename, safe=False)
