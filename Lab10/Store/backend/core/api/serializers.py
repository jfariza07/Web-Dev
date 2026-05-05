from rest_framework import serializers
from .models import Product, Category

# --- 2 个 ModelSerializer (已有的) ---
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

# --- 2 个 普通 Serializer (新增，凑够 2+2) ---
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

class MessageSerializer(serializers.Serializer):
    message = serializers.CharField()