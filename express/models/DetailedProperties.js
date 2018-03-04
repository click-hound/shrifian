import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = new Schema({
  PropertyID: { type: String, required: true },
  LastUpdated: { type: String, required: true },
  PropertyDetails: {
    ListingID: { type: String },
    Board: { type: String },
    AmmenitiesNearBy: { type: String },
    CommunicationType: { type: String },
    CommunityFeatures: { type: String },
    Crop: { type: String },
    DocumentType: { type: String },
    EquipmentType: { type: String },
    Easement: { type: String },
    FarmType: { type: String },
    Features: { type: String },
    IrrigationType: { type: String },
    Lease: { type: String },
    LeasePerTime: { type: String },
    LeasePerUnit: { type: String },
    LeaseTermRemaining: { type: String },
    LeaseTermRemainingFreq: { type: String },
    LeaseType: { type: String },
    ListingContractDate: { type: String },
    LiveStockType: { type: String },
    LoadingType: { type: String },
    LocationDescription: { type: String },
    Machinery: { type: String },
    MaintenanceFee: { type: String },
    MaintenanceFeePaymentUnit: { type: String },
    MaintenanceFeeType: { type: String },
    ManagementCompany: { type: String },
    MunicipalID: { type: String },
    Plan: { type: String },
    PoolType: { type: String },
    PoolFeatures: { type: String },
    Price: { type: String },
    PricePerTime: { type: String },
    PricePerUnit: { type: String },
    PropertyType: { type: String },
    PublicRemarks: { type: String },
    RentalEquipmentType: { type: String },
    RightType: { type: String },
    RoadType: { type: String },
    StorageType: { type: String },
    Structure: { type: String },
    SignType: { type: String },
    TransactionType: { type: String },
    TotalBuildings: { type: String },
    ViewType: { type: String },
    WaterFrontType: { type: String },
    WaterFrontName: { type: String },
    AdditionalInformationIndicator: { type: String },
    ZoningDescription: { type: String },
    ZoningType: { type: String },
    MoreInformationLink: { type: String },
    AnalyticsClick: { type: String },
    AnalyticsView: { type: String },
    Building: {
      BathroomTotal: { type: String },
      BedroomsAboveGround: { type: String },
      BedroomsBelowGround: { type: String },
      BedroomsTotal: { type: String },
      Age: { type: String },
      Amenities: { type: String },
      Amperage: { type: String },
      Anchor: { type: String },
      Appliances: { type: String },
      ArchitecturalStyle: { type: String },
      BasementDevelopment: { type: String },
      BasementFeatures: { type: String },
      BasementType: { type: String },
      BomaRating: { type: String },
      CeilingHeight: { type: String },
      CeilingType: { type: String },
      ClearCeilingHeight: { type: String },
      ConstructedDate: { type: String },
      ConstructionMaterial: { type: String },
      ConstructionStatus: { type: String },
      ConstructionStyleAttachment: { type: String },
      ConstructionStyleOther: { type: String },
      ConstructionStyleSplitLevel: { type: String },
      CoolingType: { type: String },
      EnerguideRating: { type: String },
      ExteriorFinish: { type: String },
      FireProtection: { type: String },
      FireplaceFuel: { type: String },
      FireplacePresent: { type: String },
      FireplaceTotal: { type: String },
      FireplaceType: { type: String },
      Fixture: { type: String },
      FlooringType: { type: String },
      FoundationType: { type: String },
      HalfBathTotal: { type: String },
      HeatingFuel: { type: String },
      HeatingType: { type: String },
      LeedsCategory: { type: String },
      LeedsRating: { type: String },
      RenovatedDate: { type: String },
      RoofMaterial: { type: String },
      RoofStyle: { type: String },
      StoriesTotal: { type: String },
      SizeExterior: { type: String },
      SizeInterior: { type: String },
      SizeInteriorFinished: { type: String },
      StoreFront: { type: String },
      TotalFinishedArea: { type: String },
      Type: { type: String },
      Uffi: { type: String },
      UnitType: { type: String },
      UtilityPower: { type: String },
      UtilityWater: { type: String },
      VacancyRate: { type: String },
      Rooms: [
        {
          Type: { type: String },
          Width: { type: String },
          Dimension: { type: String }
        }
      ]
    },
    AgentDetails: [
      {
        Name: { type: String },
        ID: { type: String },
        LastUpdated: { type: String },
        Position: { type: String },
        Websites: [
          {
            Website: { type: String },
            ContactType: { type: String },
            WebsiteType: { type: String }
          }
        ],
        Phones: [
          {
            Phone: { type: String },
            ContactType: { type: String },
            PhoneType: { type: String }
          }
        ],
        Office: {
          Name: { type: String },
          ID: { type: String },
          LastUpdated: { type: String },
          LogoLastUpdated: { type: String },
          OrganizationType: { type: String },
          Designation: { type: String },
          Address: {
            StreetAddress: { type: String },
            AddressLine1: { type: String },
            AddressLine2: { type: String },
            StreetNumber: { type: String },
            StreetDirectionPrefix: { type: String },
            StreetName: { type: String },
            StreetSuffix: { type: String },
            StreetDirectionSuffix: { type: String },
            UnitNumber: { type: String },
            BoxNumber: { type: String },
            City: { type: String },
            Province: { type: String },
            PostalCode: { type: String },
            Country: { type: String },
            AdditionalStreetInfo: { type: String },
            CommunityName: { type: String },
            Neighbourhood: { type: String },
            Subdivision: { type: String }
          },
          Phones: [
            {
              Phone: { type: String },
              ContactType: { type: String },
              PhoneType: { type: String }
            }
          ],
          Websites: [
            {
              Website: { type: String },
              ContactType: { type: String },
              WebsiteType: { type: String }
            }
          ],
          Franchisor: { type: String }
        },
        EducationCredentials: { type: String },
        PhotoLastUpdated: { type: String },
        Address: {
          StreetAddress: { type: String },
          AddressLine1: { type: String },
          AddressLine2: { type: String },
          StreetNumber: { type: String },
          StreetDirectionPrefix: { type: String },
          StreetName: { type: String },
          StreetSuffix: { type: String },
          StreetDirectionSuffix: { type: String },
          UnitNumber: { type: String },
          BoxNumber: { type: String },
          City: { type: String },
          Province: { type: String },
          PostalCode: { type: String },
          Country: { type: String },
          AdditionalStreetInfo: { type: String },
          CommunityName: { type: String },
          Neighbourhood: { type: String },
          Subdivision: { type: String }
        },
        Specialties: { type: String },
        Specialty: { type: String },
        Designations: { type: String },
        Designation: { type: String },
        Languages: { type: String },
        Language: { type: String },
        TradingAreas: { type: String },
        TradingArea: { type: String }
      }
    ],
    Address: {
      StreetAddress: { type: String },
      AddressLine1: { type: String },
      AddressLine2: { type: String },
      StreetNumber: { type: String },
      StreetDirectionPrefix: { type: String },
      StreetName: { type: String },
      StreetSuffix: { type: String },
      StreetDirectionSuffix: { type: String },
      UnitNumber: { type: String },
      BoxNumber: { type: String },
      City: { type: String },
      Province: { type: String },
      PostalCode: { type: String },
      Country: { type: String },
      AdditionalStreetInfo: { type: String },
      CommunityName: { type: String },
      Neighbourhood: { type: String },
      Subdivision: { type: String }
    },
    AlternateURL: {
      BrochureLink: { type: String },
      MapLink: { type: String },
      PhotoLink: { type: String },
      SoundLink: { type: String },
      VideoLink: { type: String }
    },
    Land: {
      SizeTotalText: { type: String },
      SizeFrontage: { type: String },
      Acreage: { type: String },
      Amenities: { type: String },
      FenceTotal: { type: String },
      Sewer: { type: String },
      SizeDepth: { type: String },
      SizeIrregular: { type: String }
    },
    OpenHouse: [
      {
        StartDateTime: { type: String },
        EndDateTime: { type: String },
        Comments: { type: String }
      }
    ],
    ParkingSpaces: [
      {
        Name: { type: String },
        Spaces: { type: String }
      }
    ],
    Photo: [
      {
        Description: { type: String },
        SequenceID: { type: String },
        LastUpdated: { type: String },
        PhotoLastUpdated: { type: String }
      }
    ],
    UtilitiesAvailable: [
      {
        Type: { type: String },
        Description: { type: String }
      }
    ]
  }
});

export default mongoose.model("DetailedProperty", schema);
