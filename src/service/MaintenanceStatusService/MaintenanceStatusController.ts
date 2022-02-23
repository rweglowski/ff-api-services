import { APIClient, APIMapping } from '../../http';
import { MaintenanceStatus } from './MaintenanceStatus.Types';

export class MaintenanceStatusController extends APIClient {
    constructor() {
        super(APIMapping.maintenanceStatusService);
    }

    getMaintenanceStatus = async () => {
        return await this.invokeApiWithErrorHandling<MaintenanceStatus>('/public/getStatus', 'GET');
    };
}
