import { type ChangeEvent } from "react";

export interface InputProps {
    value: string;
    type: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
