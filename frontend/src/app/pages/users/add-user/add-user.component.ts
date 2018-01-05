import { Component, ViewChild, Injector, Output, EventEmitter, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ManagersService ,CreateUserDto} from '../users.service';
import * as moment from "moment";
import * as _ from "lodash";

@Component({
  selector: 'createUserModal',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent{
  
    
      @ViewChild('userNameInput') userNameInput: ElementRef;
      @ViewChild('createModal') modal: ModalDirective;
    
      @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
    
      active: boolean = false;
      saving: boolean = false;
    
      user: CreateUserDto = null;
    
      constructor(
          injector: Injector,
          private service : ManagersService,
          private activeModal: NgbActiveModal,
          private modalService: NgbModal
      ) {
      }
    
      show(): void {
          this.active = true;
          this.user = new CreateUserDto();
          this.modal.show();
      }
    
      onShown(): void {
          $(this.userNameInput.nativeElement).focus();
      }
    
      save(): void {
        this.saving = true;
        this.service.create(this.user).subscribe(()=>{
          this.saving = false;
          this.modalSave.emit(null);
        });
        this.modal.hide();
      }
    
      close(): void {
          this.active = false;
          this.modal.hide();
      }
    }
