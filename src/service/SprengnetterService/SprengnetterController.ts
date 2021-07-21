import { GenericFetchValuationResponse, HTMLError } from '.';
import { APIClient, APIMapping } from '../../http';

export class SprengnetterController extends APIClient {
    constructor() {
        super(APIMapping.spregnetterService);
    }

    /**
     *
     * @param body
     * @returns {GenericFetchValuationResponse}
     */
    async fetchValuation(body: any) {
        return await this.invokeApiWithErrorHandling<GenericFetchValuationResponse>('/api/valuation', 'POST', body);
    }

    /**
     *
     * @param body
     * @returns {GenericFetchValuationResponse}
     */
    async fetchRentValuation(body: any) {
        return await this.invokeApiWithErrorHandling<GenericFetchValuationResponse>('/api/rent', 'POST', body);
    }

    /**
     * Gets a link to the pdfReport that is stored on S3
     * @param {String} entityId - The entityId of the estate that should the pdfView should be created for.
     * @returns {string} The response contains a link to the pdf that is stored on S3.
     */
    async fetchPdfLink(entityId: String) {
        return await this.invokeApiWithErrorHandling<string | HTMLError>(`/pdfView/${entityId}`, 'GET');
    }

    /**
     * Gets the HTML that is necessary to display the market report
     * @param {String} entityId - The entityId of the estate that should the htmlView should be created for.
     * @returns {string} The response contains the html that represents the marketanalysis.
     */
    async fetchHtml(entityId: string) {
        return await this.invokeApiWithErrorHandling<string | HTMLError>(`/htmlView/${entityId}`, 'GET');
    }
}
