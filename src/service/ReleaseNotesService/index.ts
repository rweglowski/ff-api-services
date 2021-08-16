import { ReleaseNotesController } from './ReleaseNotesController';

export * from './ReleaseNotesService.Types';

export class ReleaseNotesService {
    public readonly releaseNotes: ReleaseNotesController;

    constructor() {
        this.releaseNotes = new ReleaseNotesController();
    }
}

export const ReleaseNotesServiceInstance = new ReleaseNotesService();
