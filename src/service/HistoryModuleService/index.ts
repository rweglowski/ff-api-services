import HistoryController from './HistoryController';
import UserHistoryController from './UserHistoryController';
export * from './HistoryServiceTypes';

export class HistoryModuleService {
    public readonly history: HistoryController;
    public readonly userHistory: UserHistoryController;

    constructor() {
        this.history = new HistoryController();
        this.userHistory = new UserHistoryController();
    }
}

export const HistoryModuleServiceInstance = new HistoryModuleService();
