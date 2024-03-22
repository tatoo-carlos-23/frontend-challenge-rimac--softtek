import { IItem } from "../../../core/interfaces/items.interfaces";

export interface IItemStep extends IItem {
    selected?: boolean;
}

export interface IStepContainerProps {
    items: IItemStep[];
    changeValue?: (item: IItemStep) => void;
    idSelected?: string | number;
}