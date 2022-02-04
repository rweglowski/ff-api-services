import {Captions} from '@flowfact/types';
import {ViewActionType, ViewDefinitionCategoryJsonFieldConfig, ViewType} from './ViewDefinitionService.Types';

export enum ViewDefinitionV2CategoryContentItemTypes {
    MULTIMEDIA = 'MULTIMEDIA',
    ENTITY = 'ENTITY',
    TEXT = 'TEXT',
    SCHEMA = 'SCHEMA',
    SCHEMA_INFO = 'SCHEMA_INFO',
    IS24_STATISTICS = 'IS24_STATISTICS'
}

export enum StatisticsType {
    EXPOSE_VIEWS = 'EXPOSE_VIEWS',
    CONTACT_REQUESTS = 'CONTACT_REQUESTS'
}

export type ViewDefinitionV2CategoryContentItemType = keyof typeof ViewDefinitionV2CategoryContentItemTypes;

export interface ViewDefinitionV2CategoryIs24StatisticsItem {
    type: ViewDefinitionV2CategoryContentItemTypes.IS24_STATISTICS,
    statisticsType: StatisticsType;
    icon?: string;
    linkTemplate?: string;
}

export interface ViewDefinitionV2CategoryMediaItem {
    type: ViewDefinitionV2CategoryContentItemTypes.MULTIMEDIA;
    album?: string;
    category?: string;
    index: number;
}

export interface ViewDefinitionV2CategoryEntityItem {
    type: ViewDefinitionV2CategoryContentItemTypes.ENTITY;
    fieldName?: string;
    jsonFieldConfig?: ViewDefinitionCategoryJsonFieldConfig;
}

export interface ViewDefinitionV2CategoryTextItem {
    type: ViewDefinitionV2CategoryContentItemTypes.TEXT;
    captions: Captions;
}

export interface ViewDefinitionV2CategorySchemaItem {
    type: ViewDefinitionV2CategoryContentItemTypes.SCHEMA_INFO;
}

export interface ViewDefinitionV2CategoryLinkedEntityItem {
    type: ViewDefinitionV2CategoryContentItemTypes.SCHEMA;
    fieldName: string;
    content: ViewDefinitionV2CategoryContentItem[];
}

export type ViewDefinitionV2CategoryContentItem =
    | ViewDefinitionV2CategorySchemaItem
    | ViewDefinitionV2CategoryTextItem
    | ViewDefinitionV2CategoryMediaItem
    | ViewDefinitionV2CategoryEntityItem
    | ViewDefinitionV2CategoryLinkedEntityItem
    | ViewDefinitionV2CategoryIs24StatisticsItem;


export interface ViewDefinitionV2Category<T = ViewType> {
    name: string;
    id: string;
    captions: Captions;
    content: ViewDefinitionV2CategoryContentItem[];
    hideFieldsIfEmpty: string[];
    config?: ViewDefinitionV2CategoryConfig<T>;
}

export interface ViewDefinitionV2DefaultCategory extends ViewDefinitionV2Category<Omit<ViewType, ViewType.LIST>>//ViewType.DEFAULT |
    // ViewType.CARD |
    // ViewType.CALENDAR |
    // ViewType.MAP |
    // ViewType.ENTITY_RELATION |
    // ViewType.QUICK_CREATE>
{
}

export interface ViewDefinitionV2FilterConfigurationField {
    fieldName: string;
}

export interface ViewDefinitionV2FilterConfiguration {
    id: string;
    showSavedSearches?: boolean;
    saveFilterState?: boolean;
    groupByFields?: ViewDefinitionV2FilterConfigurationField[];
    filterFields: ViewDefinitionV2FilterConfigurationField[];
}

export interface ViewDefinitionV2<T = ViewType> {
    id: string;
    metadata?: object;
    type: T;
    default: boolean;
    actions: ViewActionType[];
    captions: Captions;
    categories: ViewDefinitionV2Category<T>[];
    defaultOrder?: string;
    filterConfiguration?: ViewDefinitionV2FilterConfiguration;
    schema: string;
    hints?: Captions[];
}

export interface ViewDefinitionV2Default extends ViewDefinitionV2<Omit<ViewType, ViewType.LIST>> {}

export interface ViewDefinitionV2CategoryConfig<T = ViewType> {
}

export interface ViewDefinitionV2DefaultCategoryConfig extends ViewDefinitionV2CategoryConfig<Omit<ViewType, ViewType.LIST>> {
}

export interface ViewDefinitionV2ListCategoryConfig extends ViewDefinitionV2CategoryConfig<ViewType.LIST> {
    // defaults to true
    sortable?: boolean;
}

export interface ViewDefinitionV2ListCategory extends ViewDefinitionV2Category<ViewType.LIST> {
    config?: ViewDefinitionV2ListCategoryConfig;
}

export interface ViewDefinitionV2List extends ViewDefinitionV2<ViewType.LIST> {
    categories: ViewDefinitionV2ListCategory[];
}
