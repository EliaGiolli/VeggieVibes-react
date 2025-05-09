import { type ReactNode, type MouseEvent } from "react";

export interface ButtonProps{
    children?: ReactNode;
    type?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}