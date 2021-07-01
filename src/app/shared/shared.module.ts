import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoryComponent } from 'src/app/components/category/category.component';
import { OfferComponent } from 'src/app/components/offer/offer.component';
import { SubCategoryComponent } from 'src/app/components/sub-category/sub-category.component';
import { CategoryFilterPipe } from 'src/app/pipes/category-filter.pipe';
import { SubCategoryFilterPipe } from 'src/app/pipes/sub-category-filter.pipe';
import { SheetComponent } from '../components/sheet/sheet.component';

@NgModule({
  declarations: [
    SheetComponent,
    CategoryComponent,
    SubCategoryComponent,
    OfferComponent,
    CategoryFilterPipe,
    SubCategoryFilterPipe,
  ],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [
    SheetComponent,
    CategoryComponent,
    SubCategoryComponent,
    OfferComponent,
    CategoryFilterPipe,
    SubCategoryFilterPipe,
  ],
})
export class SharedModule {}
