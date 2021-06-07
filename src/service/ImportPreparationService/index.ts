import { UserTokenManagementController } from './UserTokenManagementController';
import { StatusController } from './StatusController';
import { TableDependenciesController } from './TableDependenciesController';
import { ConfigurationController } from './ConfigurationController';

export * from './ImportPreparationService.Types';

export class ImportPreparationService {
    public readonly userTokenManagement: UserTokenManagementController;
    public readonly status: StatusController;
    public readonly tableDependencies: TableDependenciesController;
    public readonly configuration: ConfigurationController;

    constructor() {
        this.userTokenManagement = new UserTokenManagementController();
        this.status = new StatusController();
        this.tableDependencies = new TableDependenciesController();
        this.configuration = new ConfigurationController();
    }
}

export const ImportPreparationServiceInstance = new ImportPreparationService();
