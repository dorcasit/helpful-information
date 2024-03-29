import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppHeaderComponent } from 'src/app/components/header/header.component';
import { LastUpdatedTimeComponent } from 'src/app/components/last-updated-time/last-updated-time.component';
import { OfferComponent } from 'src/app/components/offer/offer.component';
import { SubCategoryComponent } from 'src/app/components/sub-category/sub-category.component';
import { CategoryFilterPipe } from 'src/app/pipes/category-filter.pipe';
import { SubCategoryFilterPipe } from 'src/app/pipes/sub-category-filter.pipe';
import { LinkTileComponent } from '../components/link-tile/link-tile.component';

@NgModule({
  declarations: [
    LinkTileComponent,
    SubCategoryComponent,
    OfferComponent,
    AppHeaderComponent,
    LastUpdatedTimeComponent,
    CategoryFilterPipe,
    SubCategoryFilterPipe,
  ],
  imports: [CommonModule, IonicModule, FormsModule, RouterModule],
  exports: [
    LinkTileComponent,
    SubCategoryComponent,
    OfferComponent,
    AppHeaderComponent,
    LastUpdatedTimeComponent,
    CategoryFilterPipe,
    SubCategoryFilterPipe,
  ],
})
export class SharedModule {}
