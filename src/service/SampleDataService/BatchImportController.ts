import { APIClient, APIMapping } from '../../http';
import { SampleDataServiceTypes } from './SampleDataService.Types';

type ImportBundle = SampleDataServiceTypes.ImportBundle;
type BatchImportResult = SampleDataServiceTypes.BatchImportResult;

export class BatchImportController extends APIClient {
    constructor() {
        super(APIMapping.sampleDataService);
    }

    async import(request: { bundles: ImportBundle[] }) {
        return this.invokeApiWithErrorHandling<BatchImportResult>('/batch-imports', 'POST', request);
    }

    async fetchImportStatus(batchImportId: number) {
        return this.invokeApiWithErrorHandling<BatchImportResult>(`/batch-imports/${batchImportId}`, 'GET');
    }
}
