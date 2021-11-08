import { GlobalChangeController } from './GlobalChangeController';

export * from './GlobalChange.Types';

export class GlobalChangeService {
    public readonly globalChange: GlobalChangeController;

    constructor() {
        this.globalChange = new GlobalChangeController();
    }
}

export const GlobalChangeServiceInstance = new GlobalChangeService();
