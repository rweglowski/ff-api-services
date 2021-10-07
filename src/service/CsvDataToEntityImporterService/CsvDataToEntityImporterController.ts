import { APIClient, APIMapping } from '../../http';
import { CsvDataToEntityImporter } from './CsvDataToEntityImporter.Types';

export class CsvDataToEntityImporterController extends APIClient {
    constructor() {
        super(APIMapping.csvDataToEntityImporterService);
    }

    /**
     * Get import status for given fileId
     * @param fileId
     */
    async fetchTemplates(fileId: string) {
        return await this.invokeApiWithErrorHandling<CsvDataToEntityImporter.ImportStatus>('/upload/status', 'GET', undefined, {
            queryParams: {
              fileId: fileId,
            },
        });
    }
}
