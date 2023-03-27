import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  startwith=0;
  @Input()
  rating=5;
  @Output()
  ratingClick=new EventEmitter<number>();

  ratingClicked():void{
    this.ratingClick.emit(this.rating);
  }

  ngOnChanges(): void {
   //console.log("onchange",this.rating);
   this.startwith=this.rating*20;
  }
  ngOnInit(): void {
  //  console.log("onit",this.rating);
 }
}
