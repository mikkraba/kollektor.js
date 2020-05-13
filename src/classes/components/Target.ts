import { ITarget, attributeFunction } from '../../interfaces/ITarget';

export class Target implements ITarget {
    events: string[] | string;
    name: string;
    selector: string;
    labelAttribute?: string | attributeFunction;
    identifierAttribute?: string | attributeFunction;
    condition?: ((element: HTMLElement) => boolean);

    constructor(name: string, selector: string, events: string[], condition?: () => boolean, labelAttribute?: string, identifierAttribute?: string) {
        this.events = [];
        this.name = name;
        this.selector = selector;
        this.condition = condition;
        this.labelAttribute = labelAttribute;
        this.identifierAttribute = identifierAttribute;
    }
}