import { AclGroupController } from './AclGroupController';
import { AcpTemplateController } from './AcpTemplateController';
import {AcpDefaultAssignmentsController} from "./AcpDefaultAssignmentsController";

export class AclGroupService {
    public readonly aclGroupService: AclGroupController;
    public readonly acpTemplateService: AcpTemplateController;
    public readonly acpDefaultAssignment: AcpDefaultAssignmentsController

    constructor() {
        this.aclGroupService = new AclGroupController();
        this.acpTemplateService = new AcpTemplateController();
        this.acpDefaultAssignment = new AcpDefaultAssignmentsController()
    }
}

export const AclGroupServiceInstance = new AclGroupService();
