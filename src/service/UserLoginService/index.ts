import { UserLoginPolicyController } from "./UserLoginPolicyController";

export * from './UserLoginService.Types';

export class UserLogoutService {
    public static instance = new UserLogoutService();

    public readonly userLoginPolicy: UserLoginPolicyController;

    constructor() {
        this.userLoginPolicy = new UserLoginPolicyController();
    }
}

export const UserLogoutServiceInstance = new UserLogoutService();
