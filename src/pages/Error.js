import { Link } from "react-router-dom"

const Error = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center h-screen">
        <h1 className="text-white">Error | The requested resource could not be found</h1>
        <Link to="/" className="btn">
          &larr; Back to HomePage
        </Link>
      </section>
    </>
  )
}

export default Error