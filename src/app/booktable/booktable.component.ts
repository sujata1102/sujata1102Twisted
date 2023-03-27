import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.scss']
})
export class BooktableComponent implements OnInit{
booking = this.fb.group({
    name : ['sujata',{
      validators:[Validators.required,
        Validators.minLength(3)],
        nonNullable:true}],
    email : [null,{
      validators:[Validators.required,
        Validators.email],
      nonNullable:true}],
    mobiles : [null,{
      validators:[
        Validators.required,
        Validators.pattern('[0-9]{10}')
      ],
      nonNullabel:true
    }],
    date: [null,{
      validators:[
        Validators.required
      ],
      nonNullabel:true
    }],
    time: [null,{
      validators:[
        Validators.required
      ],
      nonNullabel:true
    }],
    people: [null,{
      validators:[
        Validators.required,
        Validators.minLength(1)
      ],
      nonNullabel:true
    }]
  })
  submitForm():void{
    console.log(this.booking.value);
    alert("Table Booked!!");
  }

  updateForm():void{
    this.booking.reset();
  }
  constructor(private route : ActivatedRoute,
  private fb:FormBuilder){}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params =>
      console.log(params));
  }

  get namectr():FormControl{
    return this.booking.get('name') as FormControl;
  }
  get emailctr():FormControl{
    return this.booking.get('email') as FormControl;
  }
  get mobilectr():FormControl{
    return this.booking.get('mobiles') as FormControl;
  }
  get datectr():FormControl{
    return this.booking.get('date') as FormControl;
  }
  get timectr():FormControl{
    return this.booking.get('time') as FormControl;
  }
  get nopeoplectr():FormControl{
    return this.booking.get('people') as FormControl;
  }
}
