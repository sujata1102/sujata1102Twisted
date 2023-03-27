import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit{
  loginB = this.fb.group({
    email : [null,{
      validators:[
        Validators.required,
        Validators.email],
      nonNullable:true}],
    password :[null,{
      validators:[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[$@$!%*?&])[a-z\d$@$!%*?&].{6,}')],
      nonNullable:true}]
  })
  registerB = this.rfb.group({
    fname: [null,{
      validators:[
        Validators.required
      ],
    nonNullable:true}],
    lname: [null,{
      validators:[
        Validators.required
      ],
    nonNullable:true}],
    email : [null,{
      validators:[
        Validators.required,
        Validators.email],
      nonNullable:true}],
    password :[null,{
      validators:[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[$@$!%*?&])[a-z\d$@$!%*?&].{6,}')],
      nonNullable:true}]
  })
  signInForm():void{
    console.log(this.loginB.value);
    alert("Hello "+this.loginB.value.email);
  }
  signUpForm():void{
    console.log(this.registerB.value);
    alert("Ready to login");
  }

  constructor(private route : ActivatedRoute,
  private fb:FormBuilder,
  private rfb:FormBuilder){}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params =>
      console.log(params));
  }

  get fnamectr():FormControl{
    return this.registerB.get('fname') as FormControl;
  }
  get lnamectr():FormControl{
    return this.registerB.get('lname') as FormControl;
  }
  get reemailctr():FormControl{
    return this.registerB.get('email') as FormControl;
  }
  get repassctr():FormControl{
    return this.registerB.get('password') as FormControl;
  }
  get emailctr():FormControl{
    return this.loginB.get('email') as FormControl;
  }
  get passctr():FormControl{
    return this.loginB.get('password') as FormControl;
  }

}
