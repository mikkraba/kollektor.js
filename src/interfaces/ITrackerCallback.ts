export interface ITrackerCallback {
    name: string;
    map: Map<string, string>;
    events: string[];
    handler: (event: string, mapObj: object) => void;
}