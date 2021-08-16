import { APIClient, APIMapping } from '../../http';

export class ConfigurationController extends APIClient {
    constructor() {
        super(APIMapping.importPreparationService);
    }

    /**
     * Upload a configuration file
     *
     * @param file
     */
    async upload(file: Blob) {
        const formData = new FormData();
        formData.append('file', file);

        return this.invokeApiWithErrorHandling(`/customSchemaMapping`, 'POST', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
}
