import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <div className='bg-zinc-200 flex flex-col gap-6 items-center text-center h-screen p-20'>
        <h1 className="text-2xl sm:text-5xl uppercase">Pagina non trovata!</h1>
        <Link to='/' className="bg-red-500 text-white p-3 rounded-full shadow-red-200 shadow-lg">
            Torna alla pagina iniziale!
        </Link>
    </div>
  )
}

export default ErrorPage