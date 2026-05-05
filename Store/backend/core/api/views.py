from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

# 1. 商品列表视图 (CBV)
class ProductList(APIView):
    permission_classes = [AllowAny]  # 允许所有人访问，解决 401 报错

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

# 2. 分类列表视图 (CBV)
class CategoryList(APIView):
    permission_classes = [AllowAny]  # 允许所有人访问

    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

# 3. 登录视图 (FBV)
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
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Only POST allowed"}, status=405)

# 4. 购物车相关占位符 (FBV)
@csrf_exempt
def add_to_cart_fbv(request):
    return JsonResponse({"message": "Product added to cart (Demo)"}, status=200)

@csrf_exempt
def cart_detail_fbv(request):
    return JsonResponse({"message": "Cart detail (Demo)"}, status=200)