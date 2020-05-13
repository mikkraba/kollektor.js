import { IPrivacySettings } from '../interfaces/IPrivacySettings';

export class PrivacyManager {
    private settings: IPrivacySettings;

    constructor(settings: IPrivacySettings) {
        this.settings = settings;
    }

    /**
     * Masks all digits of a number with an "n" character
     * when number of digits larger than selected limit.
     * 
     * @param limit 
     * @param value 
     */
    public maskNumbersLongerThanLimit(value: string): string {
        const regex = new RegExp("[0-9]{" + this.settings.limit + ",}", "g");
        return value.replace(regex, function(match) {
            return Array(match.length + 1).join('n');
        });
    }

    /**
     * Simple selector match control against selectors
     * provided in the settings.
     * 
     * @param element 
     */
    public isElementNotSuitable(element: HTMLElement): boolean {
        const matches = this.settings.excludedSelectors.forEach(a => {
            if (element.matches(a)) {
                return true;
            }
        });
        return Boolean(matches);
    }
}