
export class Container {
    name: string;
    selector: string;
    nameAttribute?: string;
    condition?: ((element: HTMLElement) => boolean);

    constructor(name: string, selector: string, condition?: () => boolean, nameAttribute?: string) {
        this.name = name;
        this.selector = selector;
        this.condition = condition;
        this.nameAttribute = nameAttribute;
    }
}