import React from "react";
import { TRmButtonSize, TRmButtonTheme } from "./rm-button.type";

export type TRmEventButton = React.MouseEvent<HTMLButtonElement, MouseEvent>

export interface IRmButtonProps {
    label: string;
    disabled?: boolean;
    changeButton: (ev: TRmEventButton) => void
    width?: string;
    theme?: TRmButtonTheme;
    size?: TRmButtonSize;
}

