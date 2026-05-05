from django.urls import path
from api.views import products_list, product_detail
from api.views_cbv import ProductListAPIView, ProductDetailAPIView
from api.views_mixins import ProductListAPIView as MixinsList, ProductDetailAPIView as MixinsDetail
from api.views_generics import ProductListAPIView as GenList, ProductDetailAPIView as GenDetail

urlpatterns = [
    path('products/', products_list),
    path('products/<int:product_id>/', product_detail),

    path('cbv/products/', ProductListAPIView.as_view()),
    path('cbv/products/<int:product_id>/', ProductDetailAPIView.as_view()),

    path('mixins/products/', MixinsList.as_view()),
    path('mixins/products/<int:product_id>/', MixinsDetail.as_view()),

    path('generics/products/', GenList.as_view()),
    path('generics/products/<int:product_id>/', GenDetail.as_view()),
]