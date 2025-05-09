import { InputProps } from "../types/inputTypes"

function Input({children, type, placeholder, onChange, value}: InputProps) {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} value={value} 
        className='
          bg-zinc-200 text-center hover:bg-amber-100 border-none rounded-md shadow-lg shadow-gray-800
          outline-1 outline-amber-300 focus:outline-amber-500 p-2'>
        {children}
    </input>
  )
}

export default Input