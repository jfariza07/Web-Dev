import { Routes } from '@angular/router'
import { CategoryListComponent } from './components/category-list/category-list'
import { ProductListComponent } from './components/product-list/product-list'

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
  { path: 'categories', component: CategoryListComponent },
  { path: 'category/:id', component: ProductListComponent },
  { path: '**', redirectTo: 'categories' }
]