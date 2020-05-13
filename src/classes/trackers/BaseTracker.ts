import { ITracker } from '../../interfaces/ITracker';

export abstract class BaseTracker implements ITracker {
    public eventType: string;

    constructor(e: Event) {
        this.eventType = e.type;
    }
    protected abstract populateData(): void;
}