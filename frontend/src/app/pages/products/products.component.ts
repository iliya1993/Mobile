import { Component, OnInit, ViewChild} from '@angular/core';
import { MobilesService ,MobileDto,PagedResultDtoOfProductDto} from './products.service';
import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
@Component({
  selector: 'mobiles',
  templateUrl: './products.component.html',
  styleUrls:['products.component.scss'],
  providers: [MobilesService,EditProductComponent]
})
export class MobilesComponent implements OnInit{

  @ViewChild('editProductModal') editProductModal: EditProductComponent;
  @ViewChild('createProductModal') createProductModal: CreateProductComponent;

  data: MobileDto[] = [];
  filterQuery = "";
  rowsOnPage = 10;
  pages = [5,10,15]
  sortBy = "email";
  sortOrder = "asc";
  total = 0;
  currentPage = 1;
  loading: boolean;
  constructor(private service: MobilesService,
  private editComponent: EditProductComponent,
  private modalService: NgbModal) {
        
}
  ngOnInit(){
    this.loadTable();
  }
   loadData(): Promise<PagedResultDtoOfProductDto>{
     return new Promise((resolve,reject)=>{
      this.service.getAll(this.rowsOnPage,this.currentPage).subscribe((data)=>{
          resolve(data);
      });
     });
   }
   setRow(event){
     console.log(event)
     this.rowsOnPage = event;
     this.loadTable();
   }
   
  create(){
    this.createProductModal.show();
  }
  edit(product: MobileDto){
         this.editProductModal.show(product);
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

  delete(product: MobileDto){
  if (window.confirm('Are you sure you want to delete mobile : '+product.model+'?')) {
    this.service.delete(product.id).subscribe(()=>{
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
  static refresh(){
    window.location.reload();
  }

}

