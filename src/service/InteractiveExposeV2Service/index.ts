export * from './InteractiveExposeV2Service.Types';

import { InteractiveExposeV2Controller } from './InteractiveExposeV2Controller';

export class InteractiveExposeV2Service {
    public readonly iex: InteractiveExposeV2Controller;

    constructor() {
        this.iex = new InteractiveExposeV2Controller();
    }
}

export const InteractiveExposeV2ServiceInstance = new InteractiveExposeV2Service();
