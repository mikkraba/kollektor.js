export interface ITrackerCallback {
    name: string;
    map: Map<string, string>;
    events: string[];
    function: (event: string, mapObj: object) => void;
}