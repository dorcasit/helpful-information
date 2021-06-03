export class Offer {
  offerID: number;
  offerName: string;
  offerIcon: string;
  offerDescription: string;
  offerLink?: string;
  offerNumber?: string;
  offerEmail?: string;
  offerAddress?: string;
  offerOpeningHoursWeekdays?: string;
  offerOpeningHoursWeekends?: string;
  offerForWhom?: string;
  offerDoYouNeedToKnow?: string;
  offerBasicRight?: string;
  offerVisible: boolean;
  subCategoryID: number;
  categoryID: number;
  vaccinationLocations?: string;
}
