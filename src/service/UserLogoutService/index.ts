import { UserLogoutController } from './UserLogoutController';

export * from './UserLogoutService.Types';

export class UserLogoutService {
    public static instance = new UserLogoutService();

    public readonly userLogout: UserLogoutController;

    constructor() {
        this.userLogout = new UserLogoutController();
    }
}

export const UserLogoutServiceInstance = new UserLogoutService();
