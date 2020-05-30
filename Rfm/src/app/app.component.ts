import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get userName() {
    return this.registrationForm.get('userName');
  }


  constructor(private fb: FormBuilder, private registrationService: RegistrationService) { }

  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', Validators.required],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  })

  onSubmit() {
    this.registrationService.enroll(this.registrationForm.value)
        .subscribe(
          response => console.log('success!',response ),
          error => console.log('Error!', error)
        );
  }






  // registrationForm = new FormGroup({
  //   userName: new FormControl('shabaz'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')

  //   })
  // });

  // loadApiData() {
  //   this.registrationForm.patchValue({
  //     userName: 'Bruce',
  //     password: 'apple',
  //     confirmPassword: 'test',

  //   });
  // }
}
