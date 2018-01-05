import { Component, OnInit, DoCheck} from '@angular/core';
import {Router} from '@angular/router';
import { ClientsService } from './customers.service';
import { CustomerDto , CreateCustomerDto} from './customers.service';
import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'clients',
  templateUrl: './customers.component.html',
  styleUrls:['customers.component.scss'],
  providers: [ClientsService,DatePipe]
})
export class ClientsComponent{
  isLoading: boolean;
   settings = {
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true,
    },
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave: true,
    },
   
    columns: {
      firstName: {
        title: 'Name',
        type: 'string'
      },
      lastName: {
        title: 'Last name',
        type: 'string'
      },
      address: {
        title: 'Address',
        type: 'string'
      }, 
      mobile: {
        title: 'Phone',
        type: 'string'
      }
    }
  };
  source: LocalDataSource = new LocalDataSource();
  private clients: CustomerDto[] = [];
  


    constructor(protected service: ClientsService,
      private router : Router,
      private datePipe: DatePipe) {
        this.loadTable();
    }
    loadTable(){
      this.getClients().then((data)=>{
        this.isLoading = true;
        if(data !== undefined)
      this.source.load(data);
    }).then(()=>{this.isLoading = false;});
    
    }
    getClients(): Promise<CustomerDto[]>{
      return new Promise((resolve,reject)=>{
        this.service.getAll().subscribe((data)=>{
          resolve(data.items);
      });
      });
    }
    
   onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete customer '+event.data['name']+'?')) {
      this.service.delete(event.data['id']).subscribe(()=>{});
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
      var customerDto: CustomerDto =  new CustomerDto(event.newData);
     this.service.update(customerDto).subscribe(()=>{
      this.loadTable();
     });
     
     event.confirm.resolve();
    
  }

  onCreateConfirm(event) {
      var customerDto: CreateCustomerDto =  new CreateCustomerDto(event.newData);
      this.service.create(customerDto).subscribe(()=>{
        this.loadTable();
      });
      event.confirm.resolve();
  }

}