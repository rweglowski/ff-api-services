import { CompanyController } from './CompanyController';
import { InternalController } from './InternalController';
import { LegislationTextController } from './LegislationTextController';
import { MetadataController } from './MetadataController';
import { PreconditionsController } from './PreconditionsController';

export * from './CompanyService.Types';

export class CompanyService {
    public static instance = new CompanyService();

    public readonly company: CompanyController;
    public readonly internal: InternalController;
    public readonly legislationText: LegislationTextController;
    public readonly metadata: MetadataController;
    public readonly preconditions: PreconditionsController;

    constructor() {
        this.company = new CompanyController();
        this.internal = new InternalController();
        this.legislationText = new LegislationTextController();
        this.metadata = new MetadataController();
        this.preconditions = new PreconditionsController();
    }
}

export const CompanyServiceInstance = new CompanyService();
