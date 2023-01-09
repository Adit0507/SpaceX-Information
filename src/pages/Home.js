import LoadingState from "../components/LoadingState";
import React, { useState, useEffect } from 'react'

const Home = () => {
    const [company, setCompany] = useState(null)
    useEffect(() => {
        const fetchCompany = async () => {
            const res = await fetch("https://api.spacexdata.com/v4/company")
            const data = await res.json()
            setCompany(data)
        }
        fetchCompany()
    }, [])

    return (
        <>
            {!company ? (
                <LoadingState />
            ) : (
                <section className="showcase">
                    <div className="overlay">
                        <article className="text-white">
                            <h1 className="heading text-center capitalize">All the SpaceX data in one place</h1>

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto mt-10 lg:gap-20 px-5">
                                <article>
                                    <h2 className="font-bold border-b-2 border-white text-xl mb-2 uppercase tracking-wider">About</h2>
                                    <ul className="text-sm opacity-75">
                                        <li className="mb-1">{company.name} was founded by</li>
                                        <li className="mb-1">{company.founder} in the year</li>
                                        <li className="mb-1">{company.founded}.</li>
                                        <li className="mb-1">
                                            It has {company.employees} employess,
                                        </li>
                                        <li className="mb-1">{company.vehicles} vehicles,</li>
                                        <li className="mb-1">
                                            {company.launch_sites} launch sites,
                                        </li>
                                        <li className="mb-1">
                                            and {company.test_sites} test sites and
                                        </li>
                                        <li className="mb-1">
                                            is valued at {company.valuation.toLocaleString()} B
                                        </li>
                                    </ul>
                                </article>

                                <article>
                                    <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">Useful Links</h2>
                                    <ul className="text-sm opacity-75">
                                        <li className="mb-1">
                                            <a href={company.links.website} rel="noreferrer" target="_blank">Website</a>
                                        </li>
                                        <li className="mb-1">
                                            <a href={company.links.twitter} rel="noreferrer" target="_blank">Twiter</a>
                                        </li>
                                        <li className="mb-1">
                                            <a href={company.links.elon_twitter} rel="noreferrer" target="_blank">Elon Musk's Twitter</a>
                                        </li>
                                    </ul>
                                </article>
                            </div>

                            <p className="max-w-3xl mx-auto text-center mt-10">{company.summary}</p>
                        </article>
                    </div>
                </section>
            )}
        </>
    )
};

export default Home;
