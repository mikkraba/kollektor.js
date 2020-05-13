import { BaseTracker } from './BaseTracker';
import { IScrollData } from '../../interfaces/IScrollData';

export class ScrollTracker extends BaseTracker {
    private collectedProperties: IScrollData;

    constructor(scrollPercentage: number, event: Event) {
        super(event);
        this.collectedProperties = {
            label: `Scroll distance ${scrollPercentage}%`,
            action: "scroll"
        };
    }

    /**
     * Not implemented.
     */
    protected populateData(): void {
        return
    }
}