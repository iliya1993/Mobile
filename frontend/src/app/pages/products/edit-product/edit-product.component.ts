import { Component, ViewChild, Injector, Output, EventEmitter, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MobilesService ,MobileDto} from '../products.service';
import * as moment from "moment";
import * as _ from "lodash";

@Component({
  selector: 'editProductModal',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  providers: [MobilesService]
})
export class EditProductComponent {

    @ViewChild('modelInput') modelInput: ElementRef;
    @ViewChild('editModal') modal: ModalDirective;

    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    active: boolean = false;
    saving: boolean = false;

    product: MobileDto ;

    constructor(
        injector: Injector,
        private service : MobilesService,
        private activeModal: NgbActiveModal,
        private modalService: NgbModal
    ) {
    }

    show(product: MobileDto): void {
        this.active = true;
        this.product = product;
        this.modal.show();
    }

    onShown(): void {
        $(this.modelInput.nativeElement).focus();
    }

    save(): void {
      this.saving = true;
      this.service.update(this.product).subscribe(()=>{
        this.saving = false;
      });
      this.modal.hide();
    }

    close(): void {
        this.active = false;
        this.modal.hide();
    }
}