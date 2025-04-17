import { type ReactNode, MouseEvent } from 'react'

interface ButtonProps{
    children?: ReactNode;
    type?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button({children, onClick}:ButtonProps) {
  return (
    <button className='bg-green-700 hover:bg-green-800 text-white rounded-lg shadow-lg shadow-zinc-400 p-2 transition-all' onClick={onClick}>
        {children}
    </button>
  )
}

export default Button