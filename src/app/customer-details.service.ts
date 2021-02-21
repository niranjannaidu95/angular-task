import { Injectable } from '@angular/core';

export type User = {
  id: number;
  name: string;
  phone_number: any;
  email: string;
};
export class CustomerDetailsService {
  public users: User[] = [];
  public count = 1;

  public addUser(user: User) {
      this.users.push({...user, id: this.count++});
  }
}
