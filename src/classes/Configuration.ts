import { IConfiguration } from '../interfaces/IConfiguration';
import { IPrivacySettings } from '../interfaces/IPrivacySettings';
import { Target } from './components/Target';
import { Container } from './components/Container';
import { ITrackerCallback } from '../interfaces/ITrackerCallback';
import { defaultTemplate } from '../templates/default';
import { Kollektor } from '..';
import { IOptions } from '../interfaces/IOptions';
import { ConfigurationTemplates } from '../enums/ConfigurationTemplates';
import { IDebounceEvent } from '../interfaces/IDebounceEvent';

export class Configuration implements IConfiguration {
    template: string;
    isDebug: boolean;
    privacy: IPrivacySettings;
    debounce: IDebounceEvent | IDebounceEvent[];
    targets: Target[];
    containers: Container[];
    consumers: ITrackerCallback[];
    scrollDistances: number[];
    
    constructor(options: IOptions) {
        const o: IConfiguration = options.template === ConfigurationTemplates.CUSTOM 
            ? this.mapCustomOptionsToConfiguration(options) 
            : Kollektor.getTemplate(options.template);

        this.template = o.template;
        this.isDebug = options.isDebug ? options.isDebug : false;
        this.privacy = options.privacy ? options.privacy : o.privacy;
        this.debounce = options.debounce ? options.debounce : o.debounce;
        this.targets = o.targets;
        this.containers = o.containers;
        this.consumers = options.consumers ? options.consumers : [];
        this.scrollDistances = options.scrollDistances ? options.scrollDistances : o.scrollDistances;
    }

    /**
     * Creates a configuration object by trying to use user provided input. 
     * Defaults to default template option values when a user has not specified 
     * certain option.
     * 
     * @param options 
     */
    private mapCustomOptionsToConfiguration(options: IOptions): IConfiguration {
        return {
            template: ConfigurationTemplates.CUSTOM,
            isDebug: options.isDebug ? options.isDebug : false,
            privacy: options.privacy ? options.privacy : defaultTemplate.privacy,
            debounce: typeof(options.debounce) != "undefined" ? options.debounce : defaultTemplate.debounce,
            targets: options.targets && options.targets.length != 0 ? options.targets : defaultTemplate.targets,
            containers: options.containers && options.containers.length != 0 ? options.containers : defaultTemplate.containers,
            consumers: options.consumers ? options.consumers : [],
            scrollDistances: options.scrollDistances ? options.scrollDistances : []
        }
    }
}