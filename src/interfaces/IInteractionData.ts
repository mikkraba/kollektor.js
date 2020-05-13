import { IBaseData } from './IBaseData';
import { IContainerData } from './IContainerData';

export interface IInteractionData extends IBaseData {
    type: string;
    identificator: string;
    container: IContainerData;
    isOutbound: boolean;
    isLink: boolean;
}