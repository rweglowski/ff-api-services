import { SprengnetterGatewayController } from './SprengnetterGatewayController';

export class SprengnetterGatewayService {
    public readonly sprengnetterGateway: SprengnetterGatewayController;

    constructor() {
        this.sprengnetterGateway = new SprengnetterGatewayController();
    }
}

export const SprengnetterGatewayServiceInstance = new SprengnetterGatewayService();
