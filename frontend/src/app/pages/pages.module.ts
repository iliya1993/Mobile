import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';
import { Pages } from './pages.component';
import { ClientsComponent } from './customers/customers.component';
import { MobilesComponent } from './products/products.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {HttpService} from '../../app/shared/http/http.service';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import {DataFilterPipe} from './products/data-filter.pipe';
import {DataTableModule } from "angular2-datatable";
import {NgxPaginationModule} from 'ngx-pagination';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ModalModule } from 'ngx-bootstrap';
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { ManagersComponent } from './users/users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
@NgModule({
  imports: 
  [CommonModule,
   AppTranslationModule, 
   NgaModule, 
   routing,
   Ng2SmartTableModule,
  FileUploadModule,
  FormsModule,
  DataTableModule,
  NgxPaginationModule,
  SpinnerComponentModule,
  ModalModule.forRoot()
],
  declarations: 
  [
    Pages, 
    ClientsComponent, 
    MobilesComponent,
    CreateProductComponent,
    DataFilterPipe,
    EditProductComponent,
    ManagersComponent,
    EditUserComponent,
    AddUserComponent
  ],
  providers:
  [
    HttpService,
    NgbActiveModal
  ],
  entryComponents: [
    CreateProductComponent,
    EditProductComponent,
  ],
})
export class PagesModule {
}
