import { UserLogoutController } from './UserLogoutController';
import { UserLoginPolicyController } from "./UserLoginPolicyController";

export * from './UserLogoutService.Types';

export class UserLogoutService {
    public static instance = new UserLogoutService();

    public readonly userLogout: UserLogoutController;
    public readonly userLoginPolicy: UserLoginPolicyController;

    constructor() {
        this.userLogout = new UserLogoutController();
        this.userLoginPolicy = new UserLoginPolicyController();
    }
}

export const UserLogoutServiceInstance = new UserLogoutService();
