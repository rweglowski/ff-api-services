import { APIClient, APIMapping } from '../../http';
import { PortalManagementTypes } from './PortalManagementService.Types';
import PublishRequest = PortalManagementTypes.PublishRequest;
import BulkPublishRequest = PortalManagementTypes.BulkPublishRequest;
import PublishBulkResponse = PortalManagementTypes.PublishBulkResponse;

export class PublishController extends APIClient {
    constructor() {
        super(APIMapping.portalManagementService);
    }

    /**
     * Allows publishing(ONLINE/OFFLINE) estates to portal
     * @param publishRequest
     * */
    async publishEstates(publishRequest: PublishRequest) {
        return await this.invokeApiWithErrorHandling<PublishRequest>('/publish', 'POST', publishRequest);
    }

    /**
    * Allows publishing(ONLINE/OFFLINE) estate to several portals
    * @param bulkPublishRequest
    * */
    async bulkPublishEstate(bulkPublishRequest: BulkPublishRequest) {
        return await this.invokeApiWithErrorHandling<PublishBulkResponse>('/publish/bulk', 'POST', bulkPublishRequest);
    }
}
