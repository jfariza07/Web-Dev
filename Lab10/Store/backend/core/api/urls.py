from django.urls import path
# 修改这一行，直接导入整个 views 模块
from . import views 

urlpatterns = [
    path('products/', views.ProductListCBV.as_view(), name='product-list'),
    path('categories/', views.CategoryListCBV.as_view(), name='category-list'),
    path('login/', views.login_view, name='login'),
    path('add-to-cart/', views.add_to_cart_fbv, name='add-to-cart'),
    path('cart/', views.cart_detail_fbv, name='cart-detail'),
]