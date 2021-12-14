import { SwissLeadController } from './SwissLeadController';

export * from './SwissLeadService.Types';

export class SwissLeadService {
    public readonly controller: SwissLeadController;

    constructor() {
        this.controller = new SwissLeadController();
    }
}

export const SwissLeadServiceInstance = new SwissLeadService();
