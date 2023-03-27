import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
sent = this.fb.group({
    name : ['sujata',{
      validators:[Validators.required,
        Validators.minLength(3)],
        nonNullable:true}],
    email : [null,{
      validators:[Validators.required,
        Validators.email],
      nonNullable:true}],
    subject : [null,{
      validators:[
        Validators.required,
      ],
      nonNullabel:true
    }],
    message: [null,{
      validators:[
        Validators.required
      ],
      nonNullabel:true
    }]
  })
  sentMessage():void{
    console.log(this.sent.value);
    alert("Message Sent!!");
  }

  constructor(private route : ActivatedRoute,
  private fb:FormBuilder){}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params =>
      console.log(params));
  }

  get namectr():FormControl{
    return this.sent.get('name') as FormControl;
  }
  get emailctr():FormControl{
    return this.sent.get('email') as FormControl;
  }
  get subjectctr():FormControl{
    return this.sent.get('subject') as FormControl;
  }
  get messagectr():FormControl{
    return this.sent.get('message') as FormControl;
  }
}
