import { APIClient, APIMapping } from '../../http';
import { GDPRServiceTypes } from './GDPRService.Types';

export class GDPRChangeRequestsController extends APIClient {
    constructor() {
        super(APIMapping.gdprService);
    }

    /**
     * TODO: Please comment this method
     * @param changeRequestId
     * @param status
     * @param reason
     */
    async updateChangeRequestStatus(changeRequestId: string, status: GDPRServiceTypes.DataChangeRequestApprovalStatus, reason?: string) {
        const formData = new FormData();
        formData.append('reason', reason || '');

        return await this.invokeApiWithErrorHandling(`/changeRequests/${changeRequestId}/status/${status}`, 'POST', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    /**
     * Returns change or delete requests. Pass in the parameters to filter a list
     */
    async fetchAllChangeRequests(
        approvalStatus?: Array<GDPRServiceTypes.DataChangeRequestApprovalStatus> | GDPRServiceTypes.DataChangeRequestApprovalStatus,
        types?: Array<GDPRServiceTypes.DataChangeRequestType> | GDPRServiceTypes.DataChangeRequestType
    ) {
        return await this.invokeApiWithErrorHandling<GDPRServiceTypes.DataChangeRequest[]>('/changeRequests/all', 'GET', undefined, {
            queryParams: {
                approvalStatus: Array.isArray(approvalStatus) ? approvalStatus.join(',') : approvalStatus,
                types: Array.isArray(types) ? types.join(',') : types,
            },
        });
    }
}
