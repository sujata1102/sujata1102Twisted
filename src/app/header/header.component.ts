import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  themecolor={
    'background':'linear-gradient(to left,black,grey)'
  };

  title = 'TwistedToppings';
  cartCount=0;
  constructor(private menu_ser : MenuService){}
  ngOnInit(): void {
    this.menu_ser.cartCount$.subscribe(count =>{
      console.log(count);
      this.cartCount = count;
    })
  }

  getcartCount():void{
    alert(this.cartCount+" Item added ")

  }
}
