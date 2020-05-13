import { IPrivacySettings } from './IPrivacySettings';
import { Target } from '../classes/components/Target';
import { ITrackerCallback } from './ITrackerCallback';
import { IDebounceEvent } from './IDebounceEvent';

/**
 * Options properties.
 */
export interface IOptions {
    template?: string;
    isDebug?: boolean;
    debounce?: IDebounceEvent | IDebounceEvent[] | null;
    privacy?: IPrivacySettings;
    targets?: Target[];
    containers?: Target[];
    consumers?: ITrackerCallback[];
    scrollDistances?: number[];
}