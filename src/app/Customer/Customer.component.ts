import { Component } from '@angular/core';
import { Customer } from './Customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './Customer.component.html'
})
export class CustomerComponent {
  title = 'AngularApp';
  objCustomer : Customer = new Customer();
}
