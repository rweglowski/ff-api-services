import { CsvDataToEntityImporterController } from './CsvDataToEntityImporterController';

export * from './CsvDataToEntityImporter.Types';

class CsvDataToEntityImporterService {
    public readonly internal: CsvDataToEntityImporterController;

    constructor() {
        this.internal = new CsvDataToEntityImporterController();
    }
}

export const CsvDataToEntityImporterServiceInstance = new CsvDataToEntityImporterService();
