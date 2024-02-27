
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { ValidatorService } from './../../../shared/services/validators.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

    private fb = inject(FormBuilder)
    private validatorService = inject(ValidatorService)

    public registerForm:FormGroup = this.fb.group({

      idNumber:          ['',[Validators.required,Validators.minLength(10)]],
      birthDate:         [null,[Validators.required]], //todo agregar validador personalizado (Mayor de edad)
      name:              ['',[Validators.required]],
      lastName:          ['',[Validators.required]],
      phoneNumber:       ['',[Validators.required, Validators.pattern('[0-9]*')]],
      email:             ['',[Validators.required,Validators.email]],
      password:          ['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:   ['',[Validators.required,Validators.minLength(6)]]

    },{
      validators: [
        this.validatorService.isFieldOneEqualFieldTwo('password','confirmPassword')
      ]
    })

    isValidField( field: string ) {
      return this.validatorService.isValidField( this.registerForm, field );
    }

    onSubmit() {
      this.registerForm.markAllAsTouched();
    }

    register(){
      Swal.fire({
        position: "bottom-end",
        icon: "success",
        title: "you have been registered",
        showConfirmButton: false,
        timer: 2000
      });
    }

}
