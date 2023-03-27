import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  loginB = this.fb.group({
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
  registerForm():void{
    console.log(this.loginB.value);
    alert("Ready To Sign In");
  }

  constructor(private route : ActivatedRoute,
  private fb:FormBuilder){}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params =>
      console.log(params));
  }
  get fnamectr():FormControl{
    return this.loginB.get('fname') as FormControl;
  }
  get lnamectr():FormControl{
    return this.loginB.get('lname') as FormControl;
  }
  get emailctr():FormControl{
    return this.loginB.get('email') as FormControl;
  }
  get passctr():FormControl{
    return this.loginB.get('password') as FormControl;
  }
}
