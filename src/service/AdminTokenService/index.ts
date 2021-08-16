import { AdminTokenController } from './AdminTokenController';
import { PublicAdminUserController } from './PublicAdminUserController';

export class AdminTokenService {
    public readonly adminTokenService: AdminTokenController;
    public readonly publicAdminUserService: PublicAdminUserController;

    constructor() {
        this.adminTokenService = new AdminTokenController();
        this.publicAdminUserService = new PublicAdminUserController();
    }
}

export const AdminTokenServiceInstance = new AdminTokenService();
