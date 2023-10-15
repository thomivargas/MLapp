export interface Data {
    site_id:                   SiteID;
    country_default_time_zone: string;
    paging:                    Paging;
    results:                   Result[];
    sort:                      Sort;
    available_sorts:           Sort[];
    filters:                   Filter[];
    available_filters:         AvailableFilter[];
    pads_info:                 PadsInfo;
}

export interface AvailableFilter {
    id:     string;
    name:   string;
    type:   string;
    values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
    id:      string;
    name:    string;
    results: number;
}

export interface Sort {
    id:   null | string;
    name: string;
}

export interface Filter {
    id:     string;
    name:   string;
    type:   string;
    values: FilterValue[];
}

export interface FilterValue {
    id:             string;
    name:           string;
    path_from_root: Sort[];
}

export interface PadsInfo {
    tracelog: string[];
}

export interface Paging {
    total:           number;
    primary_results: number;
    offset:          number;
    limit:           number;
}

export interface Result {
    id:                   string;
    title:                string;
    condition:            Condition;
    thumbnail_id:         string;
    catalog_product_id:   null | string;
    listing_type_id:      ListingTypeID;
    permalink:            string;
    buying_mode:          BuyingMode;
    site_id:              SiteID;
    category_id:          string;
    domain_id:            string;
    thumbnail:            string;
    currency_id:          CurrencyID;
    order_backend:        number;
    price:                number;
    original_price:       number | null;
    sale_price:           null;
    sold_quantity:        number;
    available_quantity:   number;
    official_store_id:    number | null;
    use_thumbnail_id:     boolean;
    accepts_mercadopago:  boolean;
    tags:                 ResultTag[];
    shipping:             Shipping;
    stop_time:            Date;
    seller:               Seller;
    seller_address:       SellerAddress;
    address:              Address;
    attributes:           Attribute[];
    installments:         Installments;
    winner_item_id:       null;
    catalog_listing:      boolean;
    discounts:            null;
    promotions:           any[];
    inventory_id:         null | string;
    official_store_name?: string;
}

export interface Address {
    state_id:   StateID;
    state_name: StateName;
    city_id:    null | string;
    city_name:  string;
}

export enum StateID {
    ArB = "AR-B",
    ArC = "AR-C",
}

export enum StateName {
    BuenosAires = "Buenos Aires",
    CapitalFederal = "Capital Federal",
}

export interface Attribute {
    id:                   ID;
    name:                 Name;
    value_id:             null | string;
    value_name:           string;
    attribute_group_id:   AttributeGroupID;
    attribute_group_name: AttributeGroupName;
    value_struct:         Struct | null;
    values:               AttributeValue[];
    source:               number;
    value_type:           ValueType;
}

export enum AttributeGroupID {
    Empty = "",
    Others = "OTHERS",
}

export enum AttributeGroupName {
    Empty = "",
    Otros = "Otros",
}

export enum ID {
    Brand = "BRAND",
    ItemCondition = "ITEM_CONDITION",
    Line = "LINE",
    Model = "MODEL",
    NetVolume = "NET_VOLUME",
    NetWeight = "NET_WEIGHT",
    PackageLength = "PACKAGE_LENGTH",
    PackageWeight = "PACKAGE_WEIGHT",
    PacksNumber = "PACKS_NUMBER",
    ProductConservation = "PRODUCT_CONSERVATION",
    SaleCondition = "SALE_CONDITION",
    SaleFormat = "SALE_FORMAT",
    UnitVolume = "UNIT_VOLUME",
    UnitWeight = "UNIT_WEIGHT",
    UnitsPerPack = "UNITS_PER_PACK",
    UnitsPerPackage = "UNITS_PER_PACKAGE",
}

export enum Name {
    CantidadDePacks = "Cantidad de packs",
    CondiciónDeVenta = "Condición de venta",
    CondiciónDelÍtem = "Condición del ítem",
    ConservaciónDelProducto = "Conservación del producto",
    FormatoDeVenta = "Formato de venta",
    LargoDelPaquete = "Largo del paquete",
    Línea = "Línea",
    Marca = "Marca",
    Modelo = "Modelo",
    PesoDeLaUnidad = "Peso de la unidad",
    PesoDelPaquete = "Peso del paquete",
    PesoNeto = "Peso neto",
    UnidadesPorEnvase = "Unidades por envase",
    UnidadesPorPack = "Unidades por pack",
    VolumenDeLaUnidad = "Volumen de la unidad",
    VolumenNeto = "Volumen neto",
}

export interface Struct {
    number: number;
    unit:   Unit;
}

export enum Unit {
    CM = "cm",
    Cc = "cc",
    G = "g",
    Kg = "kg",
    L = "L",
    ML = "mL",
}

export enum ValueType {
    Integer = "integer",
    List = "list",
    Number = "number",
    NumberUnit = "number_unit",
    String = "string",
}

export interface AttributeValue {
    id:     null | string;
    name:   string;
    struct: Struct | null;
    source: number;
}

export enum BuyingMode {
    BuyItNow = "buy_it_now",
}

export enum Condition {
    New = "new",
}

export enum CurrencyID {
    Ars = "ARS",
}

export interface Installments {
    quantity:    number;
    amount:      number;
    rate:        number;
    currency_id: CurrencyID;
}

export enum ListingTypeID {
    GoldSpecial = "gold_special",
}

export interface Seller {
    id:                 number;
    nickname:           string;
    car_dealer:         boolean;
    real_estate_agency: boolean;
    _:                  boolean;
    registration_date:  Date;
    tags:               SellerTag[];
    car_dealer_logo:    string;
    permalink:          string;
    seller_reputation:  SellerReputation;
    eshop?:             Eshop;
}

export interface Eshop {
    eshop_id:         number;
    seller:           number;
    nick_name:        string;
    eshop_status_id:  number;
    site_id:          SiteID;
    eshop_experience: number;
    eshop_rubro:      EshopRubro | null;
    eshop_locations:  any[];
    eshop_logo_url:   string;
}

export interface EshopRubro {
    id:          string;
    name:        string;
    category_id: string;
}

export enum SiteID {
    Mla = "MLA",
}

export interface SellerReputation {
    level_id:            LevelID;
    power_seller_status: PowerSellerStatus;
    transactions:        Transactions;
    metrics:             Metrics;
}

export enum LevelID {
    The5_Green = "5_green",
}

export interface Metrics {
    sales:                 Sales;
    claims:                Cancellations;
    delayed_handling_time: Cancellations;
    cancellations:         Cancellations;
}

export interface Cancellations {
    period: CancellationsPeriod;
    rate:   number;
    value:  number;
}

export enum CancellationsPeriod {
    The60Days = "60 days",
}

export interface Sales {
    period:    CancellationsPeriod;
    completed: number;
}

export enum PowerSellerStatus {
    Platinum = "platinum",
}

export interface Transactions {
    canceled:  number;
    completed: number;
    period:    TransactionsPeriod;
    ratings:   Ratings;
    total:     number;
}

export enum TransactionsPeriod {
    Historic = "historic",
}

export interface Ratings {
    negative: number;
    neutral:  number;
    positive: number;
}

export enum SellerTag {
    Brand = "brand",
    CreditsPriority1 = "credits_priority_1",
    CreditsPriority4 = "credits_priority_4",
    CreditsProfile = "credits_profile",
    Developer = "developer",
    Eshop = "eshop",
    LargeSeller = "large_seller",
    MediumSeller = "medium_seller",
    MessagesAsSeller = "messages_as_seller",
    Mshops = "mshops",
    Normal = "normal",
}

export interface SellerAddress {
    comment:      string;
    address_line: string;
    id:           null;
    latitude:     null;
    longitude:    null;
    country:      Sort;
    state:        Sort;
    city:         Sort;
}

export interface Shipping {
    store_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: LogisticType;
    mode:          Mode;
    tags:          string[];
    benefits:      null;
    promise:       null;
}

export enum LogisticType {
    CrossDocking = "cross_docking",
    Fulfillment = "fulfillment",
    XdDropOff = "xd_drop_off",
}

export enum Mode {
    Me2 = "me2",
}

export enum ResultTag {
    BestSellerCandidate = "best_seller_candidate",
    BrandVerified = "brand_verified",
    CartEligible = "cart_eligible",
    CatalogBoost = "catalog_boost",
    DealOfTheDay = "deal_of_the_day",
    GoodQualityPicture = "good_quality_picture",
    GoodQualityThumbnail = "good_quality_thumbnail",
    ImmediatePayment = "immediate_payment",
    MeliChoiceCandidate = "meli_choice_candidate",
    ModerationPenalty = "moderation_penalty",
    ShippingGuaranteed = "shipping_guaranteed",
    StandardPriceByChannel = "standard_price_by_channel",
    SupermarketEligible = "supermarket_eligible",
}