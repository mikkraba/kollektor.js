import { InteractionTracker } from './classes/trackers/InteractionTracker';
import { defaultTemplate } from './templates/default';
import { bootstrap4Template } from './templates/bootstrap4';
import { Configuration } from './classes/Configuration';
import { IConfiguration } from './interfaces/IConfiguration';
import { Messenger } from './helpers/Messenger';
import { IOptions } from './interfaces/IOptions';
import { IDebounceEvent } from './interfaces/IDebounceEvent';
import { debounce } from './helpers/Utilities';
import { ConfigurationTemplates } from './enums/ConfigurationTemplates';
import { ScrollTracker } from './classes/trackers/ScrollTracker';
import { ITracker } from './interfaces/ITracker';
import { ITarget } from './interfaces/ITarget';
import { PrivacyManager } from './helpers/PrivacyManager';
import { ITrackerCallback } from './interfaces/ITrackerCallback';

export class Kollektor {
    private static instance: Kollektor;
    private messenger: Messenger;
    private privacyManager: PrivacyManager;
    private options: IConfiguration;
    private trackedScrollDistances: number[];
    
    private constructor(options: IConfiguration) {
        this.options = options;
        this.messenger = Messenger.getInstance(this.options.isDebug || false);
        this.privacyManager = new PrivacyManager(options.privacy);
        this.trackedScrollDistances = [];
    }

    /**
     * Returns Kollektor instance. Creates it if necessary.
     * 
     * @param options 
     */
    public static getInstance(options?: IOptions): Kollektor | void {
        if (!options && !Kollektor.instance || !options) {
            console.error("Kollektor was not provided options and no instance is previously registered.");
            return;
        }
        if (!options && Kollektor.instance) {
            return Kollektor.instance;
        }

        if (options && options.template === "custom" 
            && !options.consumers) {
                    console.error("Kollektor cannot be registered without any callbacks or plugins");
                    return;
        }
        
        const conf: IConfiguration = new Configuration(options);

        if(!Kollektor.instance) {
            Kollektor.instance = new Kollektor(conf);
        }
        return Kollektor.instance;
    }

    /**
     * Returns a pre-defined template according to template string.
     * 
     * @param template name of template.
     */
    public static getTemplate(template?: string): IConfiguration {
        switch(template) {
            case ConfigurationTemplates.BOOTSTRAP4:
                return bootstrap4Template;
            default:
                return defaultTemplate;
        }
    }

    /**
     * Registers necessary listeners according to targets set given with options.
     */
    private registerListeners(): void {
        this.messenger.log("registerListeners()");
        const events: Map<string,string> = new Map();
        this.options.targets.forEach(target => {
            if (typeof target.events === "string") {
                const event = target.events;
                if (!events.has(event)) {
                    events.set(event, target.selector);
                } else {
                    events.set(event, `${events.get(event)}, ${target.selector}`);
                }
            } else {
                target.events.forEach(event => {
                    if (!events.has(event)) {
                        events.set(event, target.selector);
                    } else {
                        events.set(event, `${events.get(event)}, ${target.selector}`);
                    }
                });
            }
        });
        events.forEach((selectors: string, eventName: string) => {
            this.registerInteractionListener(eventName, selectors);
        });

        // register scroll listeners
        if (this.options.scrollDistances.length != 0) {
            this.registerScrollDistanceListener();
        }
    }

    /**
     * Registers specific listeners according to defined targets and target's assigned events.
     * 
     * @param eventName listener event
     * @param selectors listener selectors
     * @returns eventlistener
     */
    private registerInteractionListener(eventName: string, selectors: string): void {
        this.messenger.log("registerInteractionListeners()");
        const that = this;
        const debounceEvent: IDebounceEvent | null = Array.isArray(this.options.debounce) 
            ? this.options.debounce.find(d => d.event == eventName) 
            : this.options.debounce;

        //TODO: Remove code duplication
        if (debounceEvent && (debounceEvent.event == eventName || debounceEvent.event == "all")) {
            document.addEventListener(eventName, debounce(function(this: HTMLElement, e: Event) {
                let element: HTMLElement | null = e.target as HTMLElement;
                for (element; element && element != this; element = element.parentNode as HTMLElement) {
                    if (element.matches(selectors)) {
                        that.analyseInteractionEvent(element, e);
                        break;
                    }
                }
            }, debounceEvent.delay), false);
        } else {
            document.addEventListener(eventName, function(this: HTMLElement, e: Event) {
                let element: HTMLElement | null = e.target as HTMLElement;
                for (element; element && element != this; element = element.parentNode as HTMLElement) {
                    if (element.matches(selectors)) {
                        that.analyseInteractionEvent(element, e);
                        break;
                    }
                }
            }, false);
        }
    }

    /**
     * Registers scroll listener
     */
    private registerScrollDistanceListener(): void {
        const debounceEvent: IDebounceEvent | null = Array.isArray(this.options.debounce) 
            ? this.options.debounce.find(d => d.event == "scroll")
            : (this.options.debounce && (this.options.debounce.event == "all" || this.options.debounce.event == "scroll") 
            ? this.options.debounce : null);
        const that = this;
        if (debounceEvent) {
            document.addEventListener("scroll", debounce(function(e: Event) {
                that.analyseScrollEvent(e);
            }, debounceEvent.delay), false);
        } else {
            document.addEventListener("scroll", function(e: Event) {
                that.analyseScrollEvent(e);
            }, false);
        }
    }

    /**
     * Checks if particular event target matches any of the targets defined in options.
     * If does, continues with tracker object creation.
     * 
     * Includes minimal privacy check if the element is suitable for collection.
     * 
     * @param element 
     * @param event 
     */
    private analyseInteractionEvent(element: HTMLElement, event: Event): void {
        this.messenger.log("analyseEvent()");
        // Element matches excluded selectors
        if (this.privacyManager.isElementNotSuitable(element)) {
            return;
        }

        // Find target component for clicked element
        const targetComponent: ITarget = this.options.targets.find(target => {
            if (element.matches(target.selector)) return target;
        }) || null;
        
        // In case no matching target component was found, do not proceed.
        if (!targetComponent) return;

        // Create tracker object
        const res: InteractionTracker = new InteractionTracker(element, event as MouseEvent, targetComponent, this.options.containers);
       
        // Trigger registered callbacks
        if (res) {
            this.sendToAllConsumers(res);
        }
    }
    
    /**
     * Checks if scroll event has reached any of the set distances.
     * 
     * @param event 
     */
    private analyseScrollEvent(event: Event): void {
        // https://stackoverflow.com/a/59396510 by Dave
        const {target} = event;
        const {documentElement, body} = target as Document;
        const {scrollTop: documentElementScrollTop, scrollHeight: documentElementScrollHeight, clientHeight} = documentElement;
        const {scrollTop: bodyScrollTop, scrollHeight: bodyScrollHeight} = body;
        const percentage = (documentElementScrollTop || bodyScrollTop) / ((documentElementScrollHeight || bodyScrollHeight) - clientHeight) * 100;
        // snippet end

        const passedScrollDistances: number[] = this.options.scrollDistances.filter(sd => sd < percentage);

        // overview in case of debug
        this.messenger.log({
            "optionDistances": this.options.scrollDistances,
            "scrollPercentage": percentage,
            "passedDistances": passedScrollDistances,
            "trackedDistances": this.trackedScrollDistances
        });

        if (!passedScrollDistances.length) return;

        passedScrollDistances.forEach(d => {
            if (!this.trackedScrollDistances.includes(d)) {
                this.sendToAllConsumers(new ScrollTracker(d, event))
                this.trackedScrollDistances.push(d)
            }
        });
    }

    /**
     * Triggers all sending to all consumers.
     * 
     * @param tracker 
     */
    private sendToAllConsumers(tracker: ITracker): void {
        this.messenger.log("sendToAllConsumers()");
        this.messenger.log(tracker);
        this.forwardToConsumers(tracker);
    }

    /**
     * Triggers all custom callbacks defined in the options.
     * 
     * @param tracker tracker object with collected info.
     */
    private forwardToConsumers(tracker: ITracker): void {
        this.messenger.log("forwardToConsumers()");
        this.options.consumers.forEach(cb => {
            if ((typeof cb.events === "string" && (cb.events === tracker.eventType || cb.events === "all")) 
            || cb.events.includes(tracker.eventType)) {
                const data: object = this.mapToCallbackObject(tracker, cb.map);
                this.messenger.log({
                    "consumer": cb.name,
                    "providedData": data
                }); // debug
                cb.handler(tracker.eventType, data);
            }
        });
    }

    /**
     * Creates an object with properties according to map property in callback object.
     * 
     * @param tracker tracker object with collected info.
     * @param cbObject custom callback map object.
     */
    private mapToCallbackObject(tracker: ITracker, cbObject: Map<string, string>): object {
        this.messenger.log("mapToCallbackObject()");
        const data: {[key: string]: any} = {};
        Object.entries(cbObject).forEach( ([k, v]) => {
            const val = v.split('.').reduce((a: object, b: keyof object) => a[b], tracker) || "";
            data[k] = this.privacyManager.maskNumbersLongerThanLimit(val);
        });
        return data;
    }

    /**
     * Calls all methods that are necessary for data collecting.
     */
    track(): void {
        this.messenger.log("Tracking started");
        this.registerListeners();
    }
}

/**
 * Library initialization method.
 * Returns a Kollektor instance.
 * 
 * @param options all user defined options.
 */
export const register = (options: IOptions): Kollektor | void => {
    if (!options.consumers) {
        console.warn("Kollektor: cannot be registered without any callbacks or plugins");
        return;
    }
    const badConsumers: ITrackerCallback[] = options.consumers.filter(c => !c.name || !c.map || !c.events || !c.handler);
    if (badConsumers.length != 0) {
        console.warn(
            "Kollektor: all consumers must have a name, map, events and function defined",{
            "badConsumers": badConsumers
        });
        return;
    }
    if (options.scrollDistances) {
        if (options.scrollDistances.filter(d => d > 100 || d < 0).length) {
            console.warn("Scroll distances can be only between 0 and 100");
            return;
        }
    }
    return Kollektor.getInstance(options);
}