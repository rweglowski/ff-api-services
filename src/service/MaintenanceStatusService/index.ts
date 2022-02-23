import { MaintenanceStatusController } from './MaintenanceStatusController';

export * from './MaintenanceStatus.Types';

export class MaintenanceStatusService {
    public readonly maintenanceStatus: MaintenanceStatusController;

    constructor() {
        this.maintenanceStatus = new MaintenanceStatusController();
    }
}

export const MaintenanceStatusServiceInstance = new MaintenanceStatusService();