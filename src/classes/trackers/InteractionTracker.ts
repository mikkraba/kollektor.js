import { BaseTracker } from './BaseTracker';
import { Target } from '../components/Target';
import { Container } from '../components/Container';
import { INativeProperties } from '../../interfaces/INativeProperties';
import { IInteractionData } from '../../interfaces/IInteractionData';
import { IContainerData } from '../../interfaces/IContainerData';

export class InteractionTracker extends BaseTracker {
    private element: HTMLElement;
    private matchedTarget: Target;
    private matchedContainers: Container[];
    private nativeProperties: INativeProperties;
    private collectedProperties: IInteractionData;

    constructor(element: HTMLElement, e: MouseEvent, target: Target, containers: Container[]) {
        super(e);
        this.element =  element;
        this.matchedTarget = target;
        this.matchedContainers = containers;
        this.nativeProperties = this.populateNativeProperties();
        this.collectedProperties = this.populateData();
    }

    /**
     * Populates default properties possible.
     */
    private populateNativeProperties(): INativeProperties {
        return {
            id: this.element.id,
            label: this.element.innerText,
            attributes: this.element.attributes,
            classes: this.element.classList,
            href: this.element.getAttribute("href") || "",
            type: this.element.getAttribute("type") || "",
            role: this.element.getAttribute("role") || "",
            style: this.element.getAttribute("style") || ""
        }
    }

    /**
     * Populates all data for collected properties.
     * Does also minimal analysis, searching for suitable element for the tracker object.
     * In case the target has specified condition, returns according to result of that.
     * If not, tries to make assumptions depending on content.
     * 
     */
    protected populateData(): IInteractionData {
        const targetComponent = this.matchedTarget;
        let element: HTMLElement;
        // If the registered component has a certain condition given by user
        if (targetComponent.condition) {
            if (targetComponent.condition(this.element)) {
                element = this.element;
            }
        } else {
            let p = this.element.parentElement;
            let elm = this.element;
            let shareOfSpace = p ? (elm.offsetHeight * elm.offsetWidth) / (p.offsetHeight * p.offsetWidth) : 0;
            while(p && (shareOfSpace > 0.95 
                && (elm.offsetHeight > (p.offsetHeight - 10) || elm.offsetWidth > (p.offsetWidth - 10))) 
                && !elm.getAttribute("id")) {

                elm = p;
                p = p.parentElement;

                shareOfSpace = p ? (elm.offsetHeight * elm.offsetWidth) / (p.offsetHeight * p.offsetWidth) : 0;
            }
            element = elm;
        }

        return {
            type: this.matchedTarget.name,
            label: this.getLabel(element),
            identificator: this.getIdentificator(element),
            action: `${this.matchedTarget.name}-${this.eventType}`,
            container: this.getContainerObject(),
            isLink: this.isLink(),
            isOutbound: this.isOutbound()
        }
    }

    /**
     * Returns suitable label for element.
     * Returns label attribute for if defined for registered target,
     * otherwise proceeds check of best candidate.
     */
    private getLabel(element: HTMLElement): string {
        if (this.matchedTarget.labelAttribute) {
            if (typeof(this.matchedTarget.labelAttribute) == "string") {
                return this.element.getAttribute(this.matchedTarget.labelAttribute) || "";
            } else if (typeof(this.matchedTarget.labelAttribute) == "function") {
                return this.matchedTarget.labelAttribute();
            }
        }

        if (element.matches("input") && this.element.parentElement) {
            const inputLabels = this.element.parentElement.getElementsByTagName('label');
            if (inputLabels.length == 1) {
                return inputLabels[0].innerText;
            }
        }

        if (element)

        return this.nativeProperties.label;
    }

    /**
     * Checks if element has an href property value.
     */
    private isLink(): boolean {
        const href = this.nativeProperties.href;
        return Boolean(href);
    }

    /**
     * Checks if element has an href property that is outbound.
     */
    private isOutbound(): boolean {
        if (this.nativeProperties.href) {
            const external = RegExp('^((f|ht)tps?:)?//(?!' + location.host + ')');
            return external.test(this.nativeProperties.href);
        }
        return false;
    }

    /**
     * Returns suitable identificator for the element.
     */
    private getIdentificator(element: HTMLElement): string {
        // in case user had defined specific identifier to be used for universal identifier
        if (this.matchedTarget.identifierAttribute) {
            if (typeof(this.matchedTarget.identifierAttribute) == "string") {
                return this.element.getAttribute(this.matchedTarget.identifierAttribute) || "";
            } else if (typeof(this.matchedTarget.identifierAttribute) == "function") {
                return this.matchedTarget.identifierAttribute();
            }
        }

        // in case element has an id
        if (this.nativeProperties.id) {
            return this.nativeProperties.id;
        }

        // parent element has an id
        if (element.id) {
            return element.id;
        }

        // in case user had not defined specific identifier but it is a link
        if (this.isLink() && this.isOutbound()) {
            return this.nativeProperties.href || "";
        }
        
        return ""; 
    }

    /**
     * Analyses parents and matches them provided containers.
     */
    private getContainerObject(): IContainerData {
        const allMatches: Container[] = [];
        const all: string[] = [];
        const res = {
            highest: "",
            lowest: "",
            all: ""
        }
        let parent: HTMLElement |  null = this.element.parentElement;
        let first = true;
        while(parent) {
            const matchContainer = this.matchedContainers.find(c => parent?.matches(c.selector));
            if (matchContainer) {
                const parentIdentifier = matchContainer.nameAttribute 
                    ? parent.getAttribute(matchContainer.nameAttribute) 
                    : parent.getAttribute("id");
                const containerVal = `${matchContainer.name}${parentIdentifier ? "[" + parentIdentifier + "]" : ""}`;
                all.push(containerVal);
                allMatches.push(matchContainer);
                if (first) {
                    res.lowest = containerVal;
                    first = false;
                }
            }
            parent = parent.parentElement;
        }
        if (all.length != 0) {
            res.highest = all[all.length - 1];
        }
        res.all = all.join(":");
        this.matchedContainers = allMatches;
        return res;
    }
}