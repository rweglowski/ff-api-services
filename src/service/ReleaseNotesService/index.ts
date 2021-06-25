import { ReleaseNotesController } from './ReleaseNotesController';

export * from './ReleaseNotesService.Types';

export class ReleaseNotesService {

    public readonly relesaseNotes: ReleaseNotesController;

    constructor() {
        this.relesaseNotes = new ReleaseNotesController();
    }
}

export const ReleaseNotesServiceInstance = new ReleaseNotesService();
