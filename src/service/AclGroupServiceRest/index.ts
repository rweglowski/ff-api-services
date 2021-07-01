import { AclGroupServiceRestController } from './AclGroupServiceRestController';

export class AclGroupServiceRest {
    public readonly aclGroupServiceRest: AclGroupServiceRestController;

    constructor() {
        this.aclGroupServiceRest = new AclGroupServiceRestController();
    }
}

export const AclGroupServiceRestInstance = new AclGroupServiceRest();
