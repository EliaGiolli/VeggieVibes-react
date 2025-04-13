import { type ReactNode } from "react"

interface CardProps{
    children?:ReactNode;
}

function Card({children}:CardProps) {
  return (
    <article className="w-full sm:w-3xl">
        {children}
    </article>
  )
}

export default Card