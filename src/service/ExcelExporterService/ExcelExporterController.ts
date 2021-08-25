import { APIClient, APIMapping } from '../../http';
import { FlowdslConditionUnion } from '@flowfact/node-flowdsl';
import { ExcelExporterServiceTypes } from './ExcelExporterService.Types';

import ExportData = ExcelExporterServiceTypes.ExportData;

export class ExcelExporterController extends APIClient {
    constructor() {
        super(APIMapping.excelExporterService);
    }

    /**
     *
     * @param schemaName The SchemaOrGroupName that is used to export the data.
     * @param filterConditions FilterConditions that should be used to define the result more specific
     * @returns A fileId that can be used to check if the process is finished.
     */
    async createExport(schemaName: String, filterConditions: FlowdslConditionUnion | FlowdslConditionUnion[]) {
        return this.invokeApiWithErrorHandling<ExportData[]>(`/export/schema/${schemaName}`, 'POST', {
            target: 'entity',
            conditions: filterConditions,
        });
    }

    /**
     *
     * @param fileId The Id of the file that will be created when the Exporter finished creating the results.
     * @returns The Download-Link of the file.
     */
    async fetchDownloadLink(fileId: string) {
        return this.invokeApiWithErrorHandling<string>(`/export/schema/download/${fileId}`, 'GET');
    }
}
