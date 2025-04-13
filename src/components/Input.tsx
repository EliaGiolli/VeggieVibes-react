import {type ReactNode, type ChangeEvent} from 'react'

interface InputProps{
    children?: ReactNode;
    value:string;
    type: string
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input({children, type, placeholder, onChange, value}: InputProps) {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} value={value} 
        className='bg-zinc-200 text-center hover:bg-amber-100 border-none rounded-md outline-1 outline-amber-300 focus:outline-amber-500 p-2'>
        {children}
    </input>
  )
}

export default Input