import { Target } from '../classes/components/Target';
import { ITrackerCallback } from './ITrackerCallback';
import { IPrivacySettings } from './IPrivacySettings';
import { Container } from '../classes/components/Container';
import { IDebounceEvent } from './IDebounceEvent';

/**
 * Configuration properties.
 */
export interface IConfiguration {
    template: string;
    isDebug: boolean;
    privacy: IPrivacySettings;
    debounce: IDebounceEvent | IDebounceEvent[] | null;
    targets: Target[];
    containers: Container[];
    consumers: ITrackerCallback[];
    scrollDistances: number[];
}