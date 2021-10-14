import { APIClient, APIMapping } from '../http';
import { TrackingEvent } from '@flowfact/types';

export class BehaviourService extends APIClient {
    private events: TrackingEvent[] = [];
    private dataDogEvents: any[] = []
    private timeout?: number;

    constructor() {
        super(APIMapping.behaviourService);
    }

    /**
     * Tracks usage of a feature
     * @param event
     */
    track(event: TrackingEvent) {
        this.events.push(event);
        this.postEvents();
    }

    /**
     * Tracks usage of datadog action events
     * @param event as DataDog Action Event Interface
     */
    trackDataDogActionEvent(event: any) {
        this.dataDogEvents.push(event);
        this.postDataDogActionEvent();
    }

    private shouldInvokeNow = () => {
        //skip if timeout is set to anything or length = 0
        return this.timeout || this.events.length === 0
    }

    private resetTimer = (callback: () => void) => {
        //reset timeout to undefined later
        //set timeout to any right now
        this.timeout = setTimeout(() => {
            this.timeout = undefined;
            callback()
        }, 5000) as any;
    }

    private postEvents = () => {
        if (this.shouldInvokeNow()) {
            return;
        }

        const eventBatch = this.events;
        this.events = [];

        this.invokeApiWithErrorHandling('/events', 'POST', { events: eventBatch });

        this.resetTimer(this.postEvents)
    };

    private postDataDogActionEvent = () => {
        if (this.shouldInvokeNow()) {
            return;
        }

        const eventBatch = this.dataDogEvents;
        this.dataDogEvents = [];

        this.invokeApiWithErrorHandling('/datadog/action/batch', 'POST', eventBatch);

        this.resetTimer(this.postDataDogActionEvent)
    };
}

export default new BehaviourService();
