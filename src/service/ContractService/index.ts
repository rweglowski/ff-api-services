import { ContractServiceController } from './ContractServiceController';

export * from './ContractService.Types';

class ContractService {
    public readonly contract: ContractServiceController;

    constructor() {
        this.contract = new ContractServiceController();
    }
}

export const ContractServiceInstance = new ContractService();
