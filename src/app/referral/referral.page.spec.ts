import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoryComponent } from 'src/app/components/category/category.component';
import { OfferComponent } from 'src/app/components/offer/offer.component';
import { SheetComponent } from 'src/app/components/sheet/sheet.component';
import { SubCategoryComponent } from 'src/app/components/sub-category/sub-category.component';
import { CategoryFilterPipe } from 'src/app/pipes/category-filter.pipe';
import { SubCategoryFilterPipe } from 'src/app/pipes/sub-category-filter.pipe';
import { LoggingService } from 'src/app/services/logging.service';
import { ReferralPage } from './referral.page';

describe('ReferralPage', () => {
  let component: ReferralPage;
  let fixture: ComponentFixture<ReferralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ReferralPage,
        SheetComponent,
        CategoryComponent,
        SubCategoryComponent,
        OfferComponent,
        CategoryFilterPipe,
        SubCategoryFilterPipe,
      ],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: LoggingService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
