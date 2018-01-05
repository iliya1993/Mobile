import { Component, ViewChild, Injector, Output, EventEmitter, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ManagersService ,UserDto} from '../users.service';
import * as moment from "moment";
import * as _ from "lodash";

@Component({
  selector: 'editUserModal',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  @ViewChild('userNameInput') userNameInput: ElementRef;
  @ViewChild('editModal') modal: ModalDirective;

  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

  active: boolean = false;
  saving: boolean = false;

  user: UserDto ;

  constructor(
      injector: Injector,
      private service : ManagersService,
      private activeModal: NgbActiveModal,
      private modalService: NgbModal
  ) {
  }

  show(user: UserDto): void {
      this.active = true;
      this.user = user;
      this.modal.show();
  }

  onShown(): void {
      $(this.userNameInput.nativeElement).focus();
  }

  save(): void {
    this.saving = true;
    this.service.update(this.user).subscribe(()=>{
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