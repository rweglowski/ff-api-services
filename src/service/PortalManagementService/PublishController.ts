import { APIClient, APIMapping } from '../../http';
import { PortalManagementTypes } from './PortalManagementService.Types';
type PublishRequest = PortalManagementTypes.PublishRequest;
type BulkPublishRequest = PortalManagementTypes.BulkPublishRequest;
type PublishBulkResponse = PortalManagementTypes.PublishBulkResponse;
type PublishResponse = PortalManagementTypes.PublishResponse;

export class PublishController extends APIClient {
    constructor() {
        super(APIMapping.portalManagementService);
    }

    /**
     * Allows publishing(ONLINE/OFFLINE) estates to portal
     * @param publishRequest
     * @return {void} when kafka is enabled AND portal type is not Wordpress. Otherwise return {PublishResponse}
     * */
    async publishEstates(publishRequest: PublishRequest) {
        return await this.invokeApiWithErrorHandling<PublishResponse | void>('/publish', 'POST', publishRequest);
    }

    /**
     * Allows publishing(ONLINE/OFFLINE) estate to several portals
     * @param bulkPublishRequest
     * */
    async bulkPublishEstate(bulkPublishRequest: BulkPublishRequest) {
        return await this.invokeApiWithErrorHandling<PublishBulkResponse>('/publish/bulk', 'POST', bulkPublishRequest);
    }
}
