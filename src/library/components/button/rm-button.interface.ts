import React from "react";
import { TRmSize, TRmTheme } from "../../types";

export type TRmEventButton = React.MouseEvent<HTMLButtonElement, MouseEvent>

export interface IRmButtonProps {
    label: string;
    disabled?: boolean;
    changeButton: (ev: TRmEventButton) => void
    width?: string;
    theme?: TRmTheme;
    size?: TRmSize;
}

