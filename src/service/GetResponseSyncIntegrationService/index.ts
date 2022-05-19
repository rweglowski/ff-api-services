import { GetResponseController } from './GetResponseController';

export * from './GetResponseService.Types';

export class GetResponseService {
    public readonly controller: GetResponseController;

    constructor() {
        this.controller = new GetResponseController();
    }
}

export const GetResponseServiceInstance = new GetResponseService();
