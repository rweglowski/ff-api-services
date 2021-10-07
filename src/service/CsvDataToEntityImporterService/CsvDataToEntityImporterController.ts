import { ApiResponse, APIClient, APIMapping } from '../../http';
import { CsvDataToEntityImporter } from './CsvDataToEntityImporter.Types';

export class CsvDataToEntityImporterController extends APIClient {
    constructor() {
        super(APIMapping.csvDataToEntityImporterService);
    }

    /**
     * Get import status for given fileId
     * @param fileId id of uploaded csv file
     * @returns status of file inmport
     */
    async fetchImportStatus(fileId: string): Promise<ApiResponse<CsvDataToEntityImporter.ImportStatus>> {
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
     */
    async uploadCsvFile(file: FormData, targetSchema: string, delimiter: string = ','): Promise<ApiResponse> {
        return await this.invokeApiWithErrorHandling(`/upload?targetSchema=${targetSchema}&delimiter=${delimiter}`, 'POST', file)
    }

    /**
     *  Start importing file data into system
     * @param fileId id of uploaded csv file
     */
    async startImport(fileId: string): Promise<ApiResponse> {
        return await this.invokeApiWithErrorHandling(`/import?fileId=${fileId}`, 'POST')
    }

    /**
     * Update field mapping for file
     * @param fileId id of uploaded csv file
     * @param updateMappingData updated mapping data
     */
    async updateFieldMapping(fileId: string, updateMappingData: Record<string, CsvDataToEntityImporter.ImportField>): Promise<ApiResponse> {
        return await this.invokeApiWithErrorHandling(`/field_mapping?fileId=${fileId}`, 'PATCH', updateMappingData)
    }

    /**
     * 
     * @param fileId id of uploaded csv file
     * @param fieldName name of mapping field to be removed
     */
    async deleteFieldMapping(fileId: string, fieldName: string): Promise<ApiResponse> {
        return await this.invokeApiWithErrorHandling(`/field_mapping?fileId=${fileId}&fieldName=${fieldName}`, 'DELETE')
    }
}
