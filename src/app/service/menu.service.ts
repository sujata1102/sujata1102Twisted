import { Pizza, Garlic_bread, French_frie, Beverage } from '../menu';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private cartCount=0;
  cartCount$= new BehaviorSubject<number>(0);

  constructor(private http : HttpClient) { }
  getPizzaMenu():Observable<Pizza[]>{
    return this.http.get<Pizza[]>(`http://localhost:3000/pizzas`)
  }
  getPizzaMenuById(pizzaid:number):Observable<Pizza>{
    return this.http.get<Pizza>(`http://localhost:3000/pizzas/${pizzaid}`)
  }
  getBreadMenu():Observable<Garlic_bread[]>{
    return this.http.get<Garlic_bread[]>(`http://localhost:3000/Garlic_breads`)
  }
  getBreadMenuById(breadid:number):Observable<Garlic_bread>{
    return this.http.get<Garlic_bread>(`http://localhost:3000/Garlic_breads/${breadid}`)
  }
  getFrieMenu():Observable<French_frie[]>{
    return this.http.get<French_frie[]>(`http://localhost:3000/Frech_fries`)
  }
  getFrieMenuById(frieid:number):Observable<French_frie>{
    return this.http.get<French_frie>(`http://localhost:3000/Frech_fries/${frieid}`)
  }
  getBeverageMenu():Observable<Beverage[]>{
    return this.http.get<Beverage[]>(`http://localhost:3000/Beverages`)
  }
  getBeverageMenuById(beverageid:number):Observable<Beverage>{
    return this.http.get<Beverage>(`http://localhost:3000/Beverages/${beverageid}`)
  }

  increment():void{
    this.cartCount +=1;
    console.log(this.cartCount);
    this.cartCount$.next(this.cartCount);
  }
}
