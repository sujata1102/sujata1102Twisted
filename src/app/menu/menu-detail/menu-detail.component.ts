import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pizza, Garlic_bread, French_frie, Beverage } from 'src/app/menu';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {
  id!:number;
  pizza$!:Observable<Pizza>
  garlic_bread$!:Observable<Garlic_bread>
  french_frie$!:Observable<French_frie>
  beverage$!:Observable<Beverage>

  constructor(private route: ActivatedRoute,
  private ms: MenuService,
  private router:Router
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.id=Number(params.get('id'));
      console.log(this.id);
    if(!isNaN(this.id)){
      this.pizza$=this.ms.getPizzaMenuById(this.id);
      this.garlic_bread$=this.ms.getBreadMenuById(this.id);
      this.french_frie$=this.ms.getFrieMenuById(this.id);
      this.beverage$=this.ms.getBeverageMenuById(this.id);

    }
    })
  }

  goBack():void{
    setTimeout(()=>{
      this.router.navigate(['/menu']);
    },2000)

  }

  nextItem():void{
    this.id +=1;
    this.router.navigate(['/menu',this.id]);
  }
  prevItem():void{
    this.id -=1;
    this.router.navigate(['/menu',this.id]);
  }
}
