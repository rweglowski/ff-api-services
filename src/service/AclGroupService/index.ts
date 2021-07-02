import { AclGroupController } from './AclGroupController';
import { AcpTemplateController } from './AcpTemplateController';

export class AclGroupService {
    public readonly aclGroupService: AclGroupController;
    public readonly acpTemplateService: AcpTemplateController;

    constructor() {
        this.aclGroupService = new AclGroupController();
         this.acpTemplateService = new AcpTemplateController();
    }
}

export const AclGroupServiceInstance = new AclGroupService();
