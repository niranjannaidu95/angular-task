import { Injectable } from '@angular/core';

export type Customer = {
  id: number;
  name: string;

  phone_number: any;
  email: string;
};
export class CustomerDetailsService
{
  public customers: Customer[] = [];
  public count = 1;

  public addCustomer(customer: Customer)
  {
      this.customers.push({...customer, id: this.count++});
  }
}
