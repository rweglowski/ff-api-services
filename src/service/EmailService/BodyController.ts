import { APIClient, APIMapping } from '../../http';

export class BodyController extends APIClient {
    constructor() {
        super(APIMapping.emailService);
    }

    /**
     * TODO: Please comment this method
     * @param s3Key
     */
    async fetchMailBody(s3Key: string) {
        return this.invokeApiWithErrorHandling<string>('/body/html', 'GET', undefined, {
            queryParams: {
                s3key: s3Key,
            },
        });
    }
}
