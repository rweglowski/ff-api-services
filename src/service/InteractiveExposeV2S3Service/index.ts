export * from './InteractiveExposeV2S3Service.Types';

import { InteractiveExposeV2S3Controller } from './InteractiveExposeV2S3Controller';

export class InteractiveExposeV2S3Service {
    public readonly iex: InteractiveExposeV2S3Controller;

    constructor() {
        this.iex = new InteractiveExposeV2S3Controller();
    }
}

export const InteractiveExposeV2S3ServiceInstance = new InteractiveExposeV2S3Service();
