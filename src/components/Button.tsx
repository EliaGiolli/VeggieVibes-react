import { type ReactNode, MouseEvent } from 'react'

interface ButtonProps{
    children?: ReactNode;
    type?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button({children, onClick}:ButtonProps) {
  return (
    <button className='bg-red-500 text-white hover:bg-red-700 rounded-lg shadow-lg shadow-zinc-400 p-2' onClick={onClick}>
        {children}
    </button>
  )
}

export default Button