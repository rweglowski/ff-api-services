import MatchController from './MatchController';
import SearchController from './SearchController';

export * from './Matchmaking.Types';

export class MatchmakingService {
    public readonly match: MatchController;
    public readonly search: SearchController;

    public constructor() {
        this.match = new MatchController();
        this.search = new SearchController();
    }
}

export const MatchmakingServiceInstance = new MatchmakingService();
