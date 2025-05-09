import { type ReactNode, type ChangeEvent } from "react";

export interface InputProps{
    children?: ReactNode;
    value:string;
    type: string
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}