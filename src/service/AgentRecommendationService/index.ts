import { AgentRecommendationController } from './AgentRecommendationController';

export class AgentRecommendationService {
    public readonly agentRecommendationService: AgentRecommendationController;

    constructor() {
        this.agentRecommendationService = new AgentRecommendationController();
    }
}

export const AgentRecommendationServiceInstance = new AgentRecommendationService();
