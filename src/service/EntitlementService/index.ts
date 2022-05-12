import { EntitlementController } from './EntitlementController';

export * from './EntitlementService.Types';

export class EntitlementService {
    public readonly entitlement: EntitlementController;

    constructor() {
        this.entitlement = new EntitlementController();
    }
}

export const EntitlementServiceInstance = new EntitlementService();
