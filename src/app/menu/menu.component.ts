import { Component, OnInit } from '@angular/core';
import { Pizza, Garlic_bread, French_frie, Beverage } from '../menu';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  pizzas : Pizza[] =[]
  garlic_breads : Garlic_bread[]=[]
  french_fries : French_frie[]=[]
  beverages : Beverage[]=[]

  constructor(private menu_ser : MenuService){}
  ngOnInit(): void {
    this.menu_ser.getPizzaMenu().subscribe(pizzas =>
      {
        this.pizzas=pizzas;
        this.filtered=pizzas;
      })
    this.menu_ser.getBreadMenu().subscribe(garlic_breads =>
      {
        this.garlic_breads=garlic_breads;
        this.filteredG=garlic_breads;
      })
    this.menu_ser.getFrieMenu().subscribe(french_fries =>
      {
        this.french_fries=french_fries;
        this.filteredF=french_fries;
      })
    this.menu_ser.getBeverageMenu().subscribe(beverages =>
      {
        this.beverages=beverages;
        this.filteredB=beverages;
      })
  }
  addtocart(event:any,pizza:any){
    //console.log(event,product);
    //console.log("items added");
    this.menu_ser.increment();
  }


  private _filter='';
  get filter():string{
    return this._filter;
  }
  set filter(fb:string){
    this._filter=fb;
    this.filterpizzas(this._filter);
    this.filterbreads(this._filter);
    this.filterfries(this._filter);
    this.filterbeverages(this._filter);
  }
  filtered : Pizza[]=this.pizzas;
  filteredG : Garlic_bread[]=this.garlic_breads;
  filteredF : French_frie[]=this.french_fries;
  filteredB : Beverage[]=this.beverages;

  filterpizzas(searchvalue:string){
    this.filtered=this.pizzas.filter(pizza =>{
      return pizza.name.toLowerCase().includes(searchvalue.toLowerCase());
    }
    )

  }
  filterbreads(searchvalue:string){
    this.filteredG=this.garlic_breads.filter(garlic_bread =>{
      return garlic_bread.name.toLowerCase().includes(searchvalue.toLowerCase());
    })
  }
  filterfries(searchvalue:string){
    this.filteredF=this.french_fries.filter(french_frie =>{
      return french_frie.name.toLowerCase().includes(searchvalue.toLowerCase());
    })
  }
  filterbeverages(searchvalue:string){
    this.filteredB=this.beverages.filter(beverage =>{
      return beverage.name.toLowerCase().includes(searchvalue.toLowerCase());
    })
  }
  onRatingClicked(rating:number):void{
    alert(`you clicked ${rating}`);
  }
}
