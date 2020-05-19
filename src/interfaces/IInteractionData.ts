import { IBaseData } from './IBaseData';
import { IContainerData } from './IContainerData';

export interface IInteractionData extends IBaseData {
    type: string;
    identifier: string;
    container: IContainerData;
    isOutbound: boolean;
    isLink: boolean;
}