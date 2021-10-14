import { APIClient, APIMapping } from '../http';
import { TrackingEvent } from '@flowfact/types';

export class BehaviourService extends APIClient {
    private events: TrackingEvent[] = [];
    private dataDogEvents: any[] = []
    private timeout?: number;
    private dataDogEventTimeout?: number

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

    private postEvents = () => {
        if (this.timeout || this.events.length === 0 ) {
            return;
        }

        const eventBatch = this.events;
        this.events = [];

        this.invokeApiWithErrorHandling('/events', 'POST', { events: eventBatch });

        //reset timeout and trigger again
        this.timeout = setTimeout(() => {
            this.timeout = undefined;
            this.postEvents()
        }, 5000) as any;
    };

    private postDataDogActionEvent = () => {
        if (this.dataDogEventTimeout || this.events.length === 0 ) {
            return;
        }

        const eventBatch = this.dataDogEvents;
        this.dataDogEvents = [];

        this.invokeApiWithErrorHandling('/datadog/action/batch', 'POST', eventBatch);

        //reset timeout and trigger again
        this.dataDogEventTimeout = setTimeout(() => {
            this.dataDogEventTimeout = undefined;
            this.postDataDogActionEvent()
        }, 5000) as any;
    };
}

export default new BehaviourService();
