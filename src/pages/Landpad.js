import useFetch from "../hooks/useFetch"
import { Loading } from "../components"
import { Link } from "react-router-dom"

const Landpad = () => {
  const [data] = useFetch("https://api.spacexdata.com/v4/landpads")

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <section className="py-32 max-width">
          <h1 className="text-center heading mb-10">Landpads</h1>

          {data && (
            <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
              {data.map(({ id, images, full_name, type, details }) => (
                <Link to={`/landpads/${id}`} key={id}>
                  <article>
                    <img
                      src={images.large[0]}
                      alt={full_name}
                      className="h-96 object-cover"
                    />

                    <div className="bg-zinc-900 p-5">
                      <h2 className="text-white font-bold mb-5 text-xl">
                        <span className="opacity-75">{type}</span>, {full_name}
                      </h2>
                      <p className="text-white opacity-80 mb-10">
                        {`${details.substring(0, 200)}`}...
                      </p>
                      <Link to={`/landpads/${id}`} className="btn">
                        Read More &rarr;
                      </Link>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  )
}

export default Landpad;
