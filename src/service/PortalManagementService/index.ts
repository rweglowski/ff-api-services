import { PortalController } from './PortalController';
import { ProjectsController } from './ProjectsController';
import { ProjectsEstateController } from './ProjectsEstateController';
import { PublishController } from './PublishController';
import { PortalEstateController } from './PortalEstateController';
import {CompanyEstateAttributesController} from "./CompanyEstateAttributesController";

export * from './PortalManagementService.Types';

export class PortalManagementService {
    public readonly portal: PortalController;
    public readonly projects: ProjectsController;
    public readonly portalEstate: PortalEstateController;
    public readonly projectsEstate: ProjectsEstateController;
    public readonly publish: PublishController;
    public readonly companyEstate: CompanyEstateAttributesController

    constructor() {
        this.portal = new PortalController();
        this.projects = new ProjectsController();
        this.portalEstate = new PortalEstateController();
        this.projectsEstate = new ProjectsEstateController();
        this.publish = new PublishController();
        this.companyEstate = new CompanyEstateAttributesController();
    }
}

export const PortalManagementServiceInstance = new PortalManagementService();
