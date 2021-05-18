import { EntityShareTokenController } from './EntityShareTokenController';
import { EntityShareAccessController } from './EntityShareAccessController';

export * from './EntityShareService.Types';

export class EntityShareService {

    public readonly token: EntityShareTokenController;
    public readonly access: EntityShareAccessController;

    constructor() {
        this.token = new EntityShareTokenController();
        this.access = new EntityShareAccessController();
    }
}

export const EntityShareServiceInstance = new EntityShareService();
