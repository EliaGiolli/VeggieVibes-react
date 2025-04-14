import { type ReactNode } from "react"

interface CardProps{
    children?:ReactNode;
}

function Card({children}:CardProps) {
  return (
    <article className="bg-white w-full flex flex-col justify-center items-center text-center rounded-md shadow-md shadow-gray-400 p-2">
        {children}
    </article>
  )
}

export default Card