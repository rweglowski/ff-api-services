import { LinkController } from './LinkController';

export * from './SoftLinksEntityService.Types';

export class SoftLinksEntityService {
    public readonly link: LinkController;

    constructor() {
        this.link = new LinkController();
    }
}

export const SoftLinksEntityServiceInstance = new SoftLinksEntityService();
