export type attributeFunction = () => string;

export interface ITarget {
    events: string[] | string;
    name: string;
    selector: string;
    labelAttribute?: string | attributeFunction;
    identifierAttribute?: string | attributeFunction;
    condition?: ((element: HTMLElement) => boolean);
}