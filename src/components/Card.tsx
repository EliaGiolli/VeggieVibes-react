import { type ReactNode } from "react"

interface CardProps{
    children?:ReactNode;
    className?: string;
}

function Card({children}:CardProps) {
  return (
    <article className="bg-white w-full sm:max-w-2xl min-h-fit flex flex-col justify-center items-center text-center rounded-md shadow-md shadow-gray-400 p-2">
        {children}
    </article>
  )
}

export default Card