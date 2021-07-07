import { PoiSearchController } from './PoiSearchController';

export * from './PoiService.Types';

export class PoiService {

    public readonly search: PoiSearchController;

    constructor() {
        this.search = new PoiSearchController();
    }

}

export const PoiServiceInstance = new PoiService();
