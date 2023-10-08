import { Injectable } from '@angular/core';
import {Observable,} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  baseUrl:string = 'https://ecommerce.routemisr.com/api/v1/'
  constructor(private _HttpClient:HttpClient) { }
addToWishList(id:string):Observable<any>{
  return this._HttpClient.post(this.baseUrl + `wishlist`  ,  {productId: id})
}


getWishList():Observable<any>{
    return this._HttpClient.get(this.baseUrl + `wishlist`);
}
removeWishListItem(id:string) : Observable<any>{

    return this._HttpClient.delete(this.baseUrl + `wishlist/${id}`)
}

}
