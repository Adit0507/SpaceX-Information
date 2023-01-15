import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Loading } from "../components"

const SingleLaunchPad = () => {
  const [singleLaunchPad, setSingleLaunchPad] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchSingleLaunchPad = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/launchpads/${id}`)
      const data = await res.json()
      setSingleLaunchPad(data)
    }

    fetchSingleLaunchPad()
  }, [id])


  return (
    <>
      {!singleLaunchPad ? (
        <Loading />
      ) : (
        <section className='py-32 max-width flex flex-col-reverse gap-10 md:grid md:grid-cols-2'>
          <article>
            <h1 className='heading'>{singleLaunchPad.full_name}</h1>
            <h2 className='text-white text-2xl opacity-75 mt-2 font-bold'>{singleLaunchPad.name}</h2>

            <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <ul className='text-white opacity-75 text-sm flex flex-col items-start justify-start gap-3'>
                <li>{singleLaunchPad.launch_attempts} Launch Attempts</li>
                <li>{singleLaunchPad.launch_successes} Succesful Launches</li>
                {singleLaunchPad.status === 'active' ? (
                  <li className='text-emerald-500 capitalize'>
                    {singleLaunchPad.status}
                  </li>
                ) : (
                  <li className='text-red-500 capitalize'>
                    {singleLaunchPad.status}
                  </li>
                )}
              </ul>

              <ul className='text-white'>
                <h3 className='text-white font-bold mb-1'>Region</h3>
                <li className='text-sm opacity-75 mb-2'>
                  Locality: {singleLaunchPad.locality}
                </li>
                <li className='tetx-sm opacity-75'>
                  Region: {singleLaunchPad.region}
                </li>
              </ul>
            </div>

            <p className='text-white opacity-75 mb-10'>
              {singleLaunchPad.details}
            </p>

            <ul>
              <li>
                <Link to="/launchpads" className='text-white opacity-75 hover:opacity-100'>
                  &larr; Back
                </Link>
              </li>
            </ul>
          </article>

          <article>
            <img
              src={singleLaunchPad.images.large[0]}
              alt={singleLaunchPad.name}
              className='h-full object-cover'
            />
          </article>
        </section>
      )}
    </>
  )
}

export default SingleLaunchPad