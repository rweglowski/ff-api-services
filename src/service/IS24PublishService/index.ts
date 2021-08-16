import { IS24PublishController } from './IS24PublishController';
import { IS24RealEstateController } from './IS24RealEstateController';

export * from './IS24Publish.Types';

export class IS24PublishService {
    public readonly publish: IS24PublishController;
    public readonly realEstate: IS24RealEstateController;

    constructor() {
        this.publish = new IS24PublishController();
        this.realEstate = new IS24RealEstateController();
    }
}

export const IS24PublishServiceInstance = new IS24PublishService();
