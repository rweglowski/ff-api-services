import { AdminTokenController } from './AdminTokenController';
import { AdminUserController } from './AdminUserController';

export class AdminTokenService {
    public readonly adminTokenService: AdminTokenController;
    public readonly adminUserService: AdminUserController;

    constructor() {
        this.adminTokenService = new AdminTokenController();
        this.adminUserService = new AdminUserController();
    }
}

export const AdminTokenServiceInstance = new AdminTokenService();
