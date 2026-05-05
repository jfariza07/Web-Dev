from django.urls import path
from .views import ProductList, CategoryList, login_view, add_to_cart_fbv, cart_detail_fbv

urlpatterns = [
    path('products/', ProductList.as_view(), name='product-list'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('login/', login_view, name='login'),
    path('cart/add/', add_to_cart_fbv, name='add-to-cart'),
    path('cart/', cart_detail_fbv, name='cart-detail'),
]