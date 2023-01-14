import useFetch from "../hooks/useFetch"
import { Loading } from "../components"
import { Link } from "react-router-dom"

const LaunchPads = () => {
    const [data] = useFetch("https://api.spacexdata.com/v4/launchpads")

    return (
        <>
            {!data ? (
                <Loading />
            ) : (
                <section className="py-32 max-width">
                    <h1 className="heading text-center mb-10">Launchpads</h1>

                    <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
                        {data.map(({ id, images, name, details }) => (
                            <Link to={`/launchpads/${id}`}>
                                <article>
                                    <img src={images.large[0]} className="h-64 object-cover" alt="name" />

                                    <div className="bg-zinc-900 p-3">
                                        <h2 className="text-white text-lg mb-3 font-bold">
                                            {name}
                                        </h2>
                                        <p className="text-white opacity-75 mb-10">{`${details.substring(
                                            0,
                                            150
                                        )}......`}
                                        </p>
                                        <Link to={`/launchpads/${id}`} className="btn">
                                            Read More &rarr;
                                        </Link>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </>
    )
}

export default LaunchPads