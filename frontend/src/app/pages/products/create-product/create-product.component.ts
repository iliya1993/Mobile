import { Component, ViewChild, Injector, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective } from 'ngx-bootstrap';
import {CreateMobileDto, MobilesService} from '../products.service';
import {HttpService} from '../../../shared/http/http.service';
import * as _ from "lodash";
@Component({
  selector: 'createProductModal',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
  providers: [MobilesService]
})
export class CreateProductComponent{
  @ViewChild('createModal') modal: ModalDirective;
  @ViewChild('modalContent') modalContent: ElementRef;

  active: boolean = false;
  saving: boolean = false;
  product: CreateMobileDto = null;
  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
 
  constructor(private activeModal: NgbActiveModal,
              public productService: MobilesService,
              private http:HttpService) {
  }

show(): void {
    this.active = true;
    this.product = new CreateMobileDto({ isStatic: false });
    this.modal.show();
}


save(): void {
    this.saving = true;
    console.log(this.product)
    this.productService.create(this.product)
        .finally(() => { this.saving = false; })
        .subscribe(() => {
            this.closeModal();
            this.modalSave.emit(null);
        });
}


  closeModal() {
    this.active = false;
    this.modal.hide();
  }

}