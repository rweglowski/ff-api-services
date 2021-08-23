import { Flowdsl } from '@flowfact/node-flowdsl';

export namespace ExcelExporterServiceTypes {
    export type ExportFieldType = {
        type: string;
        format: string;
        linkedSchema: string;
        options: { [key: string]: string };
    };

    export type ExportData = {
        schemaId: string;
        fileID: string;
        exportEventType: string;
        flowDsl: Flowdsl;
        userDefinedFlowDsl: boolean;
        searchName: string;
        language: string;
        fieldTypes: { [key: string]: ExportFieldType };
    };

    export type ExportFormatModel = {
        type: string;
        format: string;
        unit: string;
        linkedSchema: string;
        options: { [key: string]: string };
    };

    export type ExportContentModel = {
        type: string;
        fieldName: string;
        format: ExportFormatModel;
        contentModels: ExportContentModel[];
    };

    export type SearchExportViewColumns = {
        headerCaption: string;
        contentModels?: ExportContentModel;
    };

    export type SearchExportData = {
        searchId: string;
        fileID: string;
        entityIDList: string;
        exportEventType: string;
        flowDsl: Flowdsl;
        language: string;
        viewColumns: SearchExportViewColumns[];
    };
}
