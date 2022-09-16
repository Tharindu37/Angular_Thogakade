import { Component, OnInit } from '@angular/core';

export  interface TabItem{
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  tabs: TabItem[]=[
    {
      label:'Save Customer',
      icon:'save',
      route:'/save'
    },
    {
      label:'Update Customer',
      icon:'update',
      route:'/update'
    },
    {
      label: 'Delete Customer',
      icon: 'delete',
      route: '/delete'
    },
    {
      label:'Search Customer',
      icon:'search',
      route:'/search'
    },
    {
      label:'Load Customer',
      icon:'manage_search',
      route:'/load'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
