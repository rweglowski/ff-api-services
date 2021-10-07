import { APIClient, APIMapping } from '../../http';
import { CsvDataToEntityImporter } from './CsvDataToEntityImporter.Types';

export class CsvDataToEntityImporterController extends APIClient {
    constructor() {
        super(APIMapping.csvDataToEntityImporterService);
    }

    /**
     * Get import status for given fileId
     * @param fileId id of uploaded csv file
     * @returns 
     */
    async fetchImportStatus(fileId: string) {
        return await this.invokeApiWithErrorHandling<CsvDataToEntityImporter.ImportStatus>('/import/status', 'GET', undefined, {
            queryParams: {
              fileId: fileId,
            },
        });
    }

    /**
     * Upload csv file to be imported into system
     * @param file csv file to be imported
     * @param targetSchema schema where data should be imported
     * @param delimiter delimiter used inside csv file
     * @returns 
     */
    async uploadCsvFile(file: FormData, targetSchema: string, delimiter: string = ',') {
        return await this.invokeApiWithErrorHandling(`/upload?targetSchema=${targetSchema}&delimiter=${delimiter}`, 'POST', file)
    }

    /**
     *  Start importing file data into system
     * @param fileId id of uploaded csv file
     * @returns 
     */
    async startImport(fileId: string) {
        return await this.invokeApiWithErrorHandling(`/import?fileId=${fileId}`, 'POST')
    }

    /**
     * Update field mapping for file
     * @param fileId id of uploaded csv file
     * @param updateMappingData updated mapping data
     * @returns 
     */
    async updateFieldMapping(fileId: string, updateMappingData: Record<string, unknown>) {
        return await this.invokeApiWithErrorHandling(`/field_mapping?fileId=${fileId}`, 'PATCH', updateMappingData)
    }

    /**
     * 
     * @param fileId id of uploaded csv file
     * @param fieldName name of mapping field to be removed
     * @returns 
     */
    async deleteFieldMapping(fileId: string, fieldName: string) {
        return await this.invokeApiWithErrorHandling(`/field_mapping?fileId=${fileId}&fieldName=${fieldName}`, 'DELETE')
    }
}
