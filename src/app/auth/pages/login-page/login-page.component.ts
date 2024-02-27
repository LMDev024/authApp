import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/services/validators.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private fb = inject(FormBuilder)
  private validatorService = inject(ValidatorService)
  //definimos el formulario del login
  public loginForm:FormGroup = this.fb.group({
    email:['',[Validators.required,Validators.pattern(this.validatorService.emailPattern)]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })

  isValidField( field: string ) {
    return this.validatorService.isValidField( this.loginForm, field );
  }

  login(){
    console.log('estas intentando logearte!')
  }
}
