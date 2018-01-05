import { Component, OnInit, ViewChild} from '@angular/core';
import { UserDto ,PagedResultDtoOfUserDto,ManagersService} from './users.service';
import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-managers',
  templateUrl: './users.component.html',
  providers: [ManagersService]
})
export class ManagersComponent implements OnInit   {
  @ViewChild('editUserModal') editUserModal: EditUserComponent;
  @ViewChild('createUserModal') createUserModal: AddUserComponent;
  
    data: UserDto[] = [];
    filterQuery = "";
    rowsOnPage = 10;
    pages = [5,10,15]
    sortBy = "lastName";
    sortOrder = "asc";
    total = 0;
    currentPage = 1;
    loading: boolean;
    constructor(private service: ManagersService,
    private modalService: NgbModal) {
          
  }
    ngOnInit(){
      this.loadTable();
    }
     loadData(): Promise<PagedResultDtoOfUserDto>{
       return new Promise((resolve,reject)=>{
        this.service.getAll(this.rowsOnPage,this.currentPage).subscribe((data)=>{
            resolve(data);
        });
       });
     }
     setRow(event){
       this.rowsOnPage = event;
       this.loadTable();
     }
     
  
    edit(user: UserDto){
           this.editUserModal.show(user);
    }
    create(){
      this.createUserModal.show();
}
    toInt(num: string) {
        return +num;
    }
  
    loadTable(){
      this.loading = true;
      this.loadData().then((data)=>{
        this.data = data.items;
        this.total =  data.totalCount;
        this.loading = false;
    });
  
    }
  
  
    delete(user: UserDto){
    if (window.confirm('Are you sure you want to delete manager : '+user.lastName+'?')) {
      this.service.delete(user.id).subscribe(()=>{
        this.loadTable();
      });
     
    } else {
      window.close();
    }
  }
  public onPageChange(event) {
    this.currentPage =  event;
    this.loadTable();
  }
  
    sortByWordLength = (a: any) => {
        return a.city.length;
    }

}