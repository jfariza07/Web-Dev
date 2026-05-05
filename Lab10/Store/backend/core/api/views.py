from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# 导入 REST Framework 相关的库
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

# --- 1. 商品列表 ---
class ProductListCBV(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

# --- 2. 分类列表 ---
class CategoryListCBV(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

# --- 3. 登录逻辑 ---
@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user = authenticate(username=data.get('username'), password=data.get('password'))
            if user:
                return JsonResponse({
                    "access": "fake-jwt-token-for-demo", 
                    "refresh": "fake-refresh-token",
                    "username": user.username
                }, status=200)
            return JsonResponse({"error": "Invalid credentials"}, status=401)
        except:
            return JsonResponse({"error": "Bad request"}, status=400)

# --- 4. 补齐 urls.py 要求的函数 (解决 ImportError) ---
@csrf_exempt
def add_to_cart_fbv(request):
    return JsonResponse({"message": "Function placeholder"}, status=200)

@csrf_exempt
def cart_detail_fbv(request):
    return JsonResponse({"message": "Function placeholder"}, status=200)