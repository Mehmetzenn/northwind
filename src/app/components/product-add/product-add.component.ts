import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private productService:ProductService,private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ["", Validators.required],
      unitPrice: ["", Validators.required],
      categoryId: ["", Validators.required],
      unitsInStock: ["", Validators.required]
    });
  }
  
   add() {
       if(this.productAddForm.valid){
         let productModel = Object.assign({}, this.productAddForm.value);
         this.productService.add(productModel).subscribe(response=>{
           this.toastrService.success(response.message,"Başarılı")
           console.log(response)
         },responseError => {
          if (responseError.error.Errors.length>0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
            }
          }
         }
        )
       }
       else{
         this.toastrService.error("Formunuz Eksik","Dikkat")
       }
   }

  // add() {
  //   if(this.productAddForm.valid){
  //     let productModel = Object.assign({}, this.productAddForm.value);
  //     this.productService.add(productModel).subscribe(response => {
  //       this.toastrService.success(response.message, "Başarılı");
  //       console.log(response);
  //     }, error => {
  //       // Hata durumunda çalışacak kısım
  //       if (error.error && error.error.ValidationErrors) {
  //         // FluentValidation hatalarını göster
  //         for (let i = 0; i < error.error.ValidationErrors.length; i++) {
  //           this.toastrService.error(error.error.ValidationErrors[i].ErrorMessage, "Doğrulama Hatası");
  //         }
  //       } else {
  //         // Genel hata mesajı göster
  //         this.toastrService.error(error.message, "Hata");
  //       }
  //       console.error(error);
  //     });
  //   } else {
  //     this.toastrService.warning("Formunuz Eksik", "Dikkat");
  //   }
  // }
  
}
