import { APIClient, APIMapping } from '../../http';
import { CompanyServiceTypes } from './CompanyService.Types';

export class MetadataController extends APIClient {
    constructor() {
        super(APIMapping.companyService);
    }

    /**
     * Loads metadata for company
     */
    async fetchCompanyMetadata() {
        return this.invokeApiWithErrorHandling<{ entries: CompanyServiceTypes.CompanyMetadata<any>[] }>('/metadata', 'GET');
    }

    /**
     * Save metadata for company
     * creates new metadata or updates existing one
     */
    async saveCompanyMetadata(metadata: CompanyServiceTypes.CompanyMetadata<any>) {
        return this.invokeApiWithErrorHandling<CompanyServiceTypes.CompanyMetadata<any>>('/metadata', 'POST', metadata);
    }
}
