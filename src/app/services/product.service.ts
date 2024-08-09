import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import {
   ResponseModel } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:7058/api/";
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl+"products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl+"products/getallbycategory?id=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  add(product: Product):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "products/add", product);
  }
}
