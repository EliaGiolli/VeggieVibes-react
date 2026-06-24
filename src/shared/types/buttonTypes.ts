import { type ReactNode, type MouseEvent } from "react";

export interface ButtonProps {
    children?: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
