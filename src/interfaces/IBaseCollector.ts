
export interface IBaseCollector {
    eventType: string;
    event: Event;
    id: string;
    href: string;
    attributes: string[];
    classes: string[];
}