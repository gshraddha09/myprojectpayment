import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent  {
  registerForm:FormGroup; 
  transaction: any;
  transfertypes: any;
  constructor() { 
    this.registerForm = new FormGroup({
      receiveraccountholdernumber: new FormControl('',[
        Validators.required,
        Validators.min(0)
      ]),
      receiverbic: new FormControl('',[
        Validators.required,
        Validators.pattern(/^[ A-Za-z0-9]*$/)
      ]),
      amount: new FormControl('',[
        Validators.required,
        Validators.min(0)
      ]),
     

    })
}

    

  
  handleRegister()
  {

  }
 

 

}
